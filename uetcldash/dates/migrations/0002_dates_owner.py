# Generated by Django 3.0.7 on 2020-08-13 12:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('dates', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dates',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='dates', to=settings.AUTH_USER_MODEL),
        ),
    ]
