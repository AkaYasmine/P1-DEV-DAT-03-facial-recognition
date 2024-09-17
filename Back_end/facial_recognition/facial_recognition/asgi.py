import os

from django.core.asgi import get_asgi_application


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'facial_recognition.settings')

application = get_asgi_application({
    'http': get_asgi_application(),
})
