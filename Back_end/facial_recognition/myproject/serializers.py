from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.mail import send_mail
import random

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['username'],
            email=validated_data['email'],
            password=self.generate_password()
        )
        self.send_password_email(user.email, user.password)
        return user

    def generate_password(self, length=12):
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
        return ''.join(random.choice(characters) for _ in range(length))
    

    def send_password_email(self, to_email,password):
        subject = 'Votre nouveau mot de passe'
        message = f"Bonjour, cher nouveau Admin \n Voici votre nouveau mot de passe :{password}"
        send_mail(subject, message, 'diarrasmai@gmail.com', [to_email])
