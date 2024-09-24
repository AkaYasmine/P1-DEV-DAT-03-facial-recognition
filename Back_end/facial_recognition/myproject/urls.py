from django.urls import path
from .views import Home
 
from .views import get_user_info
from .views import liste_users


urlpatterns = [
    path('', Home.as_view()),
    path('api/user/', get_user_info),
    path('users/', liste_users, name='liste_users') 
]

 