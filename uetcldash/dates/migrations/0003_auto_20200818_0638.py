# Generated by Django 3.0.7 on 2020-08-18 06:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dates', '0002_dates_owner'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dates',
            old_name='project',
            new_name='projectname',
        ),
    ]
