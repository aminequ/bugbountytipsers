# Generated by Django 4.0.2 on 2022-02-22 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_userprofile_password2'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='bio',
            field=models.TextField(default='No bio'),
        ),
    ]
