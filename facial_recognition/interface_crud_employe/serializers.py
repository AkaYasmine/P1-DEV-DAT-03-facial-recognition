# import serializers from the REST framework
from rest_framework import serializers

# importer le model des données  interface_crud_employe
from .models import interface_crud_employe

# creer une class de serialisation
class interface_crud_employeSerializer(serializers.ModelSerializer):

    # creer une class meta 
    class Meta:
        model = interface_crud_employe
        fields = ("id","nom","prenom","email","contact","photo")
