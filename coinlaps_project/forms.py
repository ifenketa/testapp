from django import forms
from currencies.models import Portfolio

class ContactForm(forms.Form):
    fullname = forms.CharField(widget=forms.TextInput(attrs={"class":"form-control", "id":"form_full_name"}))
    email = forms.EmailField()
    content = forms.CharField()

class SinginForm(forms.Form):
    customer_id = forms.CharField(label="Customer ID",widget=forms.TextInput(attrs={"class":"form-control", "Placeholder":"123456","id":"password" }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={"class":"form-control", "Placeholder":"password"}))

class PortfolioForm(forms.ModelForm):
    class Meta:
        model = Portfolio
        fields = ["tenure", "investment_amount", "savepro", "minwithdraw"]
        widgets = {
            'tenure': forms.Select(
                attrs={
                    'class': 'form-control'
                }
            ),
            'investment_amount': forms.TextInput(
                attrs={
                    'class': 'form-control'
                }
            ),
            'savepro': forms.Select(
                attrs={
                    'class': 'form-control'
                }
            ),
            'minwithdraw': forms.TextInput(
                attrs={
                    'class': 'form-control'
                }
            ),
        }

class PortfolioDepositForm(forms.ModelForm):
    class Meta:
        model = Portfolio
        fields = ["portfolio_name", "investment_amount"]
        widgets = {
            'portfolio_name': forms.Select(
                attrs={
                    'class': 'form-control'
                }
            ),
            'investment_amount': forms.TextInput(
                attrs={
                    'class': 'form-control'
                }
            ),
        }
