from rest_framework import authentication
from chat.models import Users
from .serializers import UsersSerializer
from rest_framework import viewsets


class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Users.objects.all()
