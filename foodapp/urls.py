from django.urls import re_path, path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from .views import MenuList
from django.conf.urls import url
from . import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

router = DefaultRouter()
# router.register(r'order', OrderViewSet, base_name='order')


urlpatterns = [
    path(r'', views.index, name='index'),
    path('login', views.index, name='index'),
    path('menu', views.MenuList.as_view()),
    path('menu/<int:pk>/', views.MenuById.as_view()),
    path('customer/<int:pk>/', views.CustomerById.as_view()),
    path('customerById/<int:user>/', views.CustomerByUserId.as_view()),
    path('customer', views.CustomerList.as_view()),
    path('order/<int:pk>/', views.OrderById.as_view()),
    path('order', views.OrderList.as_view()),
    path('proxy', views.ProxyList.as_view()),
    # path(r'users', views.UserList.as_view()),
    # path('users/<int:pk>/', views.UserById.as_view()),

]
