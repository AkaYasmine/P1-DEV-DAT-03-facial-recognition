# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.utils.crypto import get_random_string
from rest_framework.decorators import api_view
from rest_framework.response import Response
  

# Create your views here.
from django.contrib.auth import get_user_model
from rest_framework import generics  
from .serializers import UserSerializer
from rest_framework import status

class Home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class SignUpView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
 
# pour recuperer les information du user
@api_view(['GET'])
def get_user_info(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['GET'])
def liste_users(request):
 
    # Récupérer tous les utilisateurs
    users = User.objects.all()
    
    # Séparer les super admins et les admins
    superusers = users.filter(is_superuser=True)
    admins = users.filter(is_superuser=False)
    
    # Structurer les données à renvoyer
    data = {
        'superusers': [{
            'id': user.id,
            'username': user.username,
            'last_name': user.last_name,
            'email': user.email,
            'is_superuser': user.is_superuser
        } for user in superusers],
        
        'admins': [{
            'id': user.id,
            'username': user.username,
            'last_name': user.last_name, 
            'email': user.email,
            'is_superuser': user.is_superuser
        } for user in admins]
    }
    
    return Response(data, status=status.HTTP_200_OK)

