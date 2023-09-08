# Generated by Django 4.2.3 on 2023-07-28 23:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currencies', '0015_alter_portfolio_setupdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='available',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='deposits',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='investment_amount',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='minwithdraw',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='rate',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='remarks',
            field=models.CharField(blank=True, default=None, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='setupdate',
            field=models.DateField(blank=True, default=datetime.datetime(2023, 7, 29, 1, 34, 38, 38506), null=True),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='status',
            field=models.CharField(choices=[('new', 'New'), ('settled', 'Settled')], default='New', max_length=50),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='withdrawals',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
    ]