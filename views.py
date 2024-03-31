from django.shortcuts import render
from django import *


def mainpage(request):
    return render(request, 'mainpage.html')


def index(request):

    return render(request, "index.html")


def hero(request):
    return render(request, "herosection.html")


def products(request):
    return render(request, "products.html")


def services(request):
    return render(request, "services.html")


def medicine(request):
    return render(request, "medicine.html")


def contact(request):

    return render(request, "contact.html")


def about(request):
    return render(request, "about.html")


def home(request):
    return render(request, "home.html")


def login(request):
    return render(request, "login.html")


def ourstores(request):

    return render(request, "ourstore.html")
