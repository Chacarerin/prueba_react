from django.contrib import admin
from django.urls import path
from core.views import hola_mundo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hola/', hola_mundo),
]
