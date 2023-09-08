# Generated by Django 4.2.3 on 2023-07-28 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('currencies', '0005_rename_portfolios_portfolio'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='savepro',
            field=models.CharField(choices=[('yes', 'Yes - Activate savePro™'), ('no', 'NO')], default='no', max_length=100),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='tenure',
            field=models.CharField(choices=[('3', '3 Months || 3%'), ('6', '6 Months || 10%'), ('12', '12 Months || 25%')], default='12', max_length=50),
        ),
    ]