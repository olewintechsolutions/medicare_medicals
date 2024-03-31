from django.urls import path
from . import views

urlpatterns = [

    path("", views.index, name="index"),
    path("/about", views.about, name="about"),
    path("/contact", views.contact, name="contact"),
    path("/services", views.services, name="services"),
    path("/products", views.products, name="products"),
    path("/ourstores", views.ourstores, name="ourstores"),
    path("/medicine", views.medicine, name="medicine"),
    path("/login", views.logins, name="login"),


]
