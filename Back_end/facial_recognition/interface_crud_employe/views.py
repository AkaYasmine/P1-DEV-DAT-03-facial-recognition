import csv
from django.http import HttpResponse
from .models import interface_crud_employe
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import interface_crud_employeSerializer
from .models import interface_crud_employe

class interface_crud_employeView(viewsets.ModelViewSet):

   
    serializer_class = interface_crud_employeSerializer


    queryset = interface_crud_employe.objects.all()
    
def export_employes_csv(request):
    # Création d'une réponse HTTP avec le type de contenu CSV
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="employes.csv"'

    writer = csv.writer(response)
    # Écrire l'en-tête
    writer.writerow(['ID', 'Nom', 'Prénom', 'Email', 'Contact', 'Photo'])

    # Écrire les données des employés
    employes = interface_crud_employe.objects.all().values_list('id', 'nom', 'prenom', 'email', 'contact', 'photo')
    for employe in employes:
        writer.writerow(employe)

    return response