from django.contrib import admin
# import du model interface_crud_employe
from .models import interface_crud_employe

# creation de class pour l'integration de  admin-model
class interface_crud_employeAdmin(admin.ModelAdmin):

    # add the fields of the model here
    list_display = ("id","nom","prenom","email","contact","photo")

# enregistrer la classe de modèle
# classe de modèle et la classe de modèle Admin
# en utilisant la méthode register()
# de la classe admin.site
admin.site.register(interface_crud_employe,interface_crud_employeAdmin)