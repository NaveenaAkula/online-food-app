# Generated by Django 2.2.4 on 2019-12-13 14:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('foodapp', '0002_auto_20191213_0841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='proxy', to='foodapp.Proxy'),
        ),
    ]
