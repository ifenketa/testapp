from django.contrib import admin
from .models import Currency, Portfolio, Invoice, Transaction, Message

class CurrencyAdmin(admin.ModelAdmin):
  list_display = ("name", "symbol","image_name")

class PortfolioAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)  
    list_display = ("id","portfolio_name","investment_amount","status")    

class InvoiceAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)  
    list_display = ("id","wallet_address","private_key","invoice_amount", "received", "invoice_date")    

class TransactionAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)  
    list_display = ("id","user","portfolio_id","transaction_date","transaction_type","wallet","remark","transaction_amount")    

class MessageAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)  

# class PaymentAddressAdmin(admin.ModelAdmin):
#     readonly_fields = ('id',)  
#     list_display = ("id","invoice","private_key","address")

admin.site.register(Currency, CurrencyAdmin)
admin.site.register(Portfolio, PortfolioAdmin)
admin.site.register(Invoice, InvoiceAdmin)
admin.site.register(Transaction, TransactionAdmin)
admin.site.register(Message, MessageAdmin)
# admin.site.register(PaymentAddress, PaymentAddressAdmin)

