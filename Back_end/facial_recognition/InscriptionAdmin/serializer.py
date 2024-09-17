from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.mail import send_mail
from InscriptionAdmin.password_generate import generate_password
 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        
        
    def create(self, validated_data):
        x = generate_password()
        user = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['username'],
            email=validated_data['email'],
            password= x
        )
        self.send_password_email(user.email, x)
        return user

    def send_password_email(self,to_email,password):
        subject = 'Votre nouveau mot de passe'
        message = f"Bonjour, Vous êtes desormais un Admin \n Voici votre nouveau mot de passe :{password}"
        send_mail(subject, message, 'diarrasmai@gmail.com', [to_email])
       
