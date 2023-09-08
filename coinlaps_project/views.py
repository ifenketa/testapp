from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from currencies.models import Currency, Portfolio, Invoice, Transaction, Message
from . forms import ContactForm, SinginForm, PortfolioForm, PortfolioDepositForm
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.db.models import Sum
from bitcoin import *
from bitcoinaddress import Wallet


import requests

def home_page(request):
    currencies = Currency.objects.all().values()
    context = {
        "currencies":currencies
    }
    return render(request, 'home.html', context)

def landing_page(request, id):
    contact_form = ContactForm()
    currency = Currency.objects.get(id=id)
    context = {
        'currency':currency,
        'form': contact_form
    }
    return render(request, 'landing.html', context)

def signin_page(request):
    form = SinginForm(request.POST or None)
    context = {
        'form':form
    }      
    if form.is_valid():
        customer_id = form.cleaned_data.get("customer_id")
        password = form.cleaned_data.get("password")
        
        user = authenticate(request, username=customer_id, password=password)
        if user is not None:
            login(request, user)
            return redirect("/dashboard")

        else:
            print("Error")

    return render(request, 'signin.html', context)

def sign_out(request):
    logout(request)
    # messages.success(request,f'You have been logged out.')
    return redirect('/') 

def signup_page(request):
    return render(request, 'signup.html', {})

@login_required
def dashboard_page(request):
    portfolios = Portfolio.objects.all().order_by('-portfolio_name').values()
    portfolio_balance = Portfolio.objects.all().aggregate(balance=Sum('available')) 
    transactions = Transaction.objects.all()

    context = {
        "portfolio_balance":portfolio_balance,
        "portfolios":portfolios,
        "transactions" : transactions        
    }
    return render(request, 'dashboard.html', context)

@login_required
def add_portfolio(request):
    if request.method == "POST":
        portfolio_name = "Portfolio " + str(Portfolio.objects.all().count() + 1)
        available = request.POST['available']
        setupdate = timezone.now()
        tenure = request.POST['tenure']
        investment_amount = request.POST['investment_amount']
        rate = request.POST['rate']
        minwithdraw = 5
        status = "New"
        remarks = request.POST['remarks']
        savepro = request.POST['savepro']
       
        new_portfolio = Portfolio(portfolio_name=portfolio_name, available=available, setupdate=setupdate, tenure=tenure, investment_amount= investment_amount, rate=rate, minwithdraw=minwithdraw, status=status, remarks=remarks, savepro=savepro)
        new_portfolio.save()

        return JsonResponse({"Success":"True"})

def create_page(request):
    return render(request, 'create.html', {})

@login_required
def deposit_page(request, id=None):
    portfolios = Portfolio.objects.filter(status='New').order_by('-id').values()
    portfolio_count = Portfolio.objects.all().count()
    selectportfolio = ""
    displayportfolio = Portfolio.objects.all().last()

    if(id):
        selectportfolio = Portfolio.objects.get(id=id)
        displayportfolio = selectportfolio

    context = {
         'portfolios': portfolios,
         'portfolio_count': portfolio_count,
         'selectportfolio': selectportfolio,
         'displayportfolio':  displayportfolio
    }

    return render(request, 'deposit.html', context)

@login_required
def withdraw_page(request, id=None):
    portfolios = Portfolio.objects.filter(status='New').order_by('-id').values()
    portfolio_count = Portfolio.objects.all().count()   
    selectportfolio = ""

    if(id):
        selectportfolio = Portfolio.objects.get(id=id)

    context = {
        'portfolios': portfolios,
        'portfolio_count': portfolio_count,
        'selectportfolio': selectportfolio        
    }
    return render(request, 'deposit.html', context)

@login_required
def deposit_summary(request):
    if request.method == 'POST':
        id = request.POST['portfolio_id']
        portfolios = Portfolio.objects.filter(id=id).values()
        return JsonResponse({"portfolios":list(portfolios.values())})

@login_required  
def create_invoice(request):
    if request.method == 'POST':

        wallet = Wallet()

        private_key = wallet.key.hex
        wallet_address = wallet.address.__dict__['mainnet'].__dict__["pubaddr1c"]

        #Create invoice
        user=request.user
        portfolio_id = request.POST['portfolio_id']
        private_key = private_key
        wallet_address = wallet_address
        invoice_amount =  request.POST['amount']
        invoice_date = timezone.now()  
        received = 0
       
        new_invoice = Invoice(user=user, portfolio_id=portfolio_id, private_key=private_key, wallet_address=wallet_address, invoice_amount=invoice_amount, invoice_date=invoice_date, received=received)
        new_invoice.save()   

        # Data for creating new Transaction
        transaction_date = timezone.now()
        transaction_type = "deposit"
        remark = "Invoice created for " + invoice_amount + " BTC"
        status = "In progress"

        new_transaction = Transaction(user=user, portfolio_id=portfolio_id, transaction_date=transaction_date, transaction_type=transaction_type, remark=remark, transaction_amount=invoice_amount, status=status, wallet=wallet_address)
        new_transaction.save()     
            
        invoices = Invoice.objects.filter(id=new_invoice.id).values()          
        return JsonResponse({"invoices":list(invoices.values())})
    else:
        return HttpResponse("Some Error, Try Again!") 
    
@login_required  
def create_message(request):
    if request.method == 'POST':
        from_user = request.user
        to_user = "admin"
        message_date = timezone.now()  
        subject = request.POST['subject']
        message_body = request.POST['message_body']
        status = 0
       
        new_message = Message(from_user=from_user, to_user=to_user, message_date=message_date, subject=subject, message_body=message_body, status=status)
        new_message.save()      
            
        messages = Message.objects.filter(id=new_message.id).values()          
        return JsonResponse({"messages":list(messages.values())})
    else:
        return HttpResponse("Some Error, Try Again!")     
    
@login_required  
def single_message_page(request, id):
    message = Message.objects.get(id=id)
    context = {
        'message': message, 
    }      
    return render(request, 'singlemessage.html', context)  

def update_payment(request):
     if request.method == 'GET':
        invoice = Invoice.objects.get(pk=request.GET['id'])
        invoice.received = request.GET['received']
        invoice.save()      
        return JsonResponse({"invoice":"Saved"})        


@login_required
def invoice_page(request, id):
    invoice = Invoice.objects.get(id=id)
    context = {
        'invoice': invoice, 
    }  
    return render(request, 'invoice.html', context)  

def receive_payment(request):
    
    if (request.method != 'GET'):
        return 
    
    txid  = request.GET.get('txid')
    value = request.GET.get('value')
    status = request.GET.get('status')
    addr = request.GET.get('addr')

    invoice = Invoice.objects.get(address = addr)
    
    invoice.status = int(status)
    if (int(status) == 2):
        invoice.received = value
    invoice.txid = txid
    invoice.save()
    return HttpResponse(200)               

               

@login_required
def messages_page(request):
    messages = Message.objects.filter(to_user=request.user).values().order_by('-id') 
    context = {
        "messages" : messages
    }
    return render(request, 'messages.html', context)

@login_required
def sent_messages_page(request):
    messages = Message.objects.filter(from_user=request.user).values().order_by('-id')
    context = {
        "messages" : messages
    }
    return render(request, 'messages.html', context)

@login_required
def compose_page(request):
    return render(request, 'compose.html')

@login_required
def reply_page(request, id):
    message = Message.objects.get(id=id)
    context = {
        "message" : message
    }    
    return render(request, 'reply.html', context)

@login_required
def portfolio_page(request):
    portfolios = Portfolio.objects.all().order_by('-id').values()
    portfolio_count = Portfolio.objects.all().count()
    portfolio_balance = Portfolio.objects.all().aggregate(balance=Sum('available')) 
    active_portfolios = Portfolio.objects.filter(status='New').count()
    settled_portfolios = Portfolio.objects.filter(status='Settled').count()
    context = {
        'portfolios': portfolios,
        'portfolio_count': portfolio_count,
        'portfolio_balance': portfolio_balance,
        'active_portfolios': active_portfolios,
        'settled_portfolios': settled_portfolios,
    }
    return render(request, 'portfolio.html', context)

@login_required
def settings_page(request):
    return render(request, 'settings.html', {})

@login_required
def transactions_page(request):
    transactions = Transaction.objects.all()
    context = {
        "transactions" : transactions
    }
    return render(request, 'transactions.html', context)




@login_required
def withdraw_amount(request):
    if request.method == 'POST':
        portfolio = Portfolio.objects.get(id=request.POST['portfolio_id'])

        user=request.user
        portfolio = portfolio
        wallet = request.POST['wallet']
        withdraw_amount =  request.POST['amount']
        transaction_date = timezone.now()
        transaction_type = "withdraw"
        remark = "Client withdrawal"
        transaction_amount = withdraw_amount
        status = "In progress"

        new_transaction = Transaction(user=user, portfolio=portfolio, transaction_date=transaction_date, transaction_type=transaction_type, remark=remark, transaction_amount=transaction_amount, status=status, wallet=wallet)
        new_transaction.save()          
        
        return JsonResponse({"transaction":"successful"})

@login_required
def withdraw_success(request):
    return render(request, 'success.html', {})

def withdraw_summary(request):
    return JsonResponse({"status":"Withdrawn successfully"})


@login_required
def track_invoice(request, id):
    return render(request, 'test.html', {})