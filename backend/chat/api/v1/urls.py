from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UsersViewSet

router = DefaultRouter()
router.register("users", UsersViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
