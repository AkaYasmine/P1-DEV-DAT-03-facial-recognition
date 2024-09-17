import random

def generate_password(length=12):
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
        mot_de_passe =''.join(random.choice(characters) for _ in range(length))
        return mot_de_passe
