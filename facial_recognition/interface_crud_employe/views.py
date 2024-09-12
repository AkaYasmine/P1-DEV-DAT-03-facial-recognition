from django.shortcuts import render

# Create your views here.


from django.shortcuts import render

from rest_framework import viewsets

from .serializers import interface_crud_employeSerializer

from .models import interface_crud_employe

class interface_crud_employeView(viewsets.ModelViewSet):

   
    serializer_class = interface_crud_employeSerializer


    queryset = interface_crud_employe.objects.all()