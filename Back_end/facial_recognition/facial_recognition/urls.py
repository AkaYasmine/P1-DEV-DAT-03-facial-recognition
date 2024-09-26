from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.contrib import admin
from django.urls import path ,include
from interface_crud_employe import views
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
from interface_crud_employe.views import export_employes_csv

router = routers.DefaultRouter() 
router.register(r'tasks',views.interface_crud_employeView, 'task')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    path('export/employes/', export_employes_csv, name='export_employes_csv'),
    path('', include('myproject.urls')),
    path('', include('InscriptionAdmin.urls')),
    path('api/', include(router.urls))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
