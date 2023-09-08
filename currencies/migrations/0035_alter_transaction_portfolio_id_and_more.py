# Generated by Django 4.2.3 on 2023-07-31 14:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('currencies', '0034_alter_transaction_portfolio_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='portfolio_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='currencies.portfolio'),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
