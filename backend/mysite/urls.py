from django.contrib import admin
from django.urls import path
from blackjack.api import api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('game/', api.urls),
]
