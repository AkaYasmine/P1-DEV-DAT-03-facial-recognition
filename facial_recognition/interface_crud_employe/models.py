from django.db import models

# Create your models here.
 
class interface_crud_employe(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)
    photo = models.CharField(max_length=100)
    

    def __str__(self):
        return self.nom
