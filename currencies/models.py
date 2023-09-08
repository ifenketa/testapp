from django.db import models
from django.contrib.auth.models import User

class Currency(models.Model):
  name = models.CharField(max_length=50)
  symbol = models.CharField(max_length=50)
  image_name = models.CharField(max_length=50, default='SOME STRING')
  def __str__(self):
    return f"{self.name} {self.symbol}"

SAVEPRO_CHOICES = (
  ('yes', 'Yes - Activate savePro™'),
  ('no', 'NO'),
)

TENURE_CHOICES = (
  ('3', '3 Months || 3%'),
  ('6', '6 Months || 10%'),
  ('12', '12 Months || 25%'),
)

TRANSACTION_CHOICES = (
  ('deposit', 'Deposit'),
  ('withdraw', 'Withdraw'),
)

class Portfolio(models.Model):
  portfolio_name = models.CharField(max_length=50, blank=True, null=True)
  available = models.FloatField(default=None, blank=True, null=True)
  setupdate = models.DateField()
  tenure = models.CharField(max_length=50, choices=TENURE_CHOICES, default='12')
  investment_amount = models.FloatField(default=None, blank=True, null=True)
  rate = models.FloatField(default=None, blank=True, null=True)
  minwithdraw = models.FloatField(default=None, blank=True, null=True)
  status = models.CharField(max_length=50)
  remarks = models.CharField(max_length=100, default=None, blank=True, null=True)
  savepro = models.CharField(max_length=100, choices= SAVEPRO_CHOICES, default='no')


class Invoice(models.Model):
  STATUS_CHOICES = (
    (-1,"Not Started"),
    (0,'Unconfirmed'), 
    (1,"Partially Confirmed"), 
    (2,"Confirmed")
  )
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  portfolio_id = models.CharField(max_length=50)
  private_key = models.CharField(max_length=200)
  wallet_address = models.CharField(max_length=200)
  invoice_amount = models.FloatField(default=None, blank=True, null=True)
  received = models.IntegerField(blank=True, null=True) 
  invoice_date = models.DateField()  
  status = models.IntegerField(choices=STATUS_CHOICES, default=-1)
  txid = models.CharField(max_length=250, blank=True, null=True)
  rbf = models.IntegerField(blank=True, null=True)


class Transaction(models.Model):
  user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
  portfolio_id = models.CharField(max_length=50)
  transaction_date = models.DateField()  
  transaction_type = models.CharField(max_length=50, choices= TRANSACTION_CHOICES)
  remark = models.CharField(max_length=50)
  transaction_amount = models.FloatField(default=None, blank=True, null=True)
  status = models.CharField(max_length=50, blank=True, null=True)
  wallet = models.CharField(max_length=50)

class Message(models.Model):
  MESSAGE_STATUS = (
    (0,"Unread"),
    (1,"Read"),
  )  
  from_user = models.CharField(max_length=50)
  to_user = models.CharField(max_length=50)
  message_date = models.DateField()  
  subject = models.CharField(max_length=200)
  message_body = models.TextField()
  status = models.IntegerField(choices=MESSAGE_STATUS, default=0)

# class PaymentAddress(models.Model):
#   invoice = models.CharField(max_length=50)
#   private_key = models.CharField(max_length=200)
#   address = models.CharField(max_length=200)



