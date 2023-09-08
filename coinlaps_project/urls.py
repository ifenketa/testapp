from django.contrib import admin
from django.urls import include, path
from .views import home_page, landing_page, signin_page, signup_page, dashboard_page, create_page, deposit_page
from .views import messages_page, portfolio_page, settings_page, transactions_page, withdraw_page, sign_out, add_portfolio, sent_messages_page, reply_page
from .views import invoice_page, deposit_summary, withdraw_summary, withdraw_amount, withdraw_success, track_invoice, create_invoice, update_payment, compose_page, create_message, single_message_page


urlpatterns = [
    path('', home_page),
    path('landing/<int:id>', landing_page, name='landing_page'), 
    path('signin/', signin_page, name='signin_page'), 
    path('signup/', signup_page, name='signup_page'), 
    path('create/', create_page, name='create_page'), 
    path('deposit/<int:id>', deposit_page, name='deposit_page'),     
    path('deposit/', deposit_page, name='deposit_page'), 
    path('messages/', messages_page, name='messages_page'), 
    path('viewmessage/<int:id>', single_message_page, name='single_message_page'), 
    path('sentmessages/', sent_messages_page, name='sent_messages_page'), 
    path('compose/', compose_page, name='compose_page'), 
    path('reply/<int:id>', reply_page, name='reply_page'), 
    path('invoice/<int:id>', invoice_page, name='invoice_page'), 
    path('addportfolio/', add_portfolio, name='add_portfolio'), 
    path('portfolio/', portfolio_page, name='portfolio_page'), 
    path('settings/', settings_page, name='settings_page'), 
    path('transactions/', transactions_page, name='transactions_page'), 
    path('withdraw/<int:id>', withdraw_page, name='withdraw_page'),     
    path('withdraw/', withdraw_page, name='withdraw_page'), 
    path('dashboard/', dashboard_page, name='dashboard_page'), 
    path('signout/', sign_out, name='sign_out'), 
    path('depositsummary/', deposit_summary, name='deposit_summary'), 
    path('createinvoice/', create_invoice, name='create_invoice'), 
    path('createmessage/', create_message, name='create_message'), 
    path('withdrawamount/', withdraw_amount, name='withdraw_amount'), 
    path('withdrawsuccess/', withdraw_success, name='withdraw_success'), 
    path('withdrawsummary/', withdraw_summary, name='withdraw_summary'), 
    path('trackinvoice/<int:id>', track_invoice, name='track_invoice'), 
    path('updatepayment/', update_payment, name='update_payment'), 
    path('admin/', admin.site.urls),
]