# Generated by Django 4.2.3 on 2023-09-03 11:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('currencies', '0045_message_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='from_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
