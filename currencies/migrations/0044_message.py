# Generated by Django 4.2.3 on 2023-09-03 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currencies', '0043_remove_transaction_portfolio_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_user', models.CharField(max_length=50)),
                ('to_user', models.CharField(max_length=50)),
                ('message_date', models.DateField()),
                ('subject', models.CharField(max_length=200)),
                ('message_body', models.TextField()),
            ],
        ),
    ]