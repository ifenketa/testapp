# Generated by Django 4.2.3 on 2023-08-11 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currencies', '0041_rename_wallet_invoice_wallet_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='invoice',
            name='rbf',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='invoice',
            name='received',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='invoice',
            name='status',
            field=models.IntegerField(choices=[(-1, 'Not Started'), (0, 'Unconfirmed'), (1, 'Partially Confirmed'), (2, 'Confirmed')], default=-1),
        ),
        migrations.AddField(
            model_name='invoice',
            name='txid',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
