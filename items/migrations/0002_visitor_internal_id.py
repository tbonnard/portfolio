# Generated by Django 4.1.6 on 2023-02-23 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='visitor',
            name='internal_id',
            field=models.IntegerField(default=1, unique=True),
        ),
    ]
