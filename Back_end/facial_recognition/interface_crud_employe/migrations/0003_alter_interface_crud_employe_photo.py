# Generated by Django 4.1.6 on 2024-09-17 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("interface_crud_employe", "0002_rename_numero_interface_crud_employe_contact"),
    ]

    operations = [
        migrations.AlterField(
            model_name="interface_crud_employe",
            name="photo",
            field=models.ImageField(upload_to="images/"),
        ),
    ]
