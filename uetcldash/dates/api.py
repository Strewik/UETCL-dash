from .models import *
from rest_framework import viewsets, permissions
from .serializers import *


#Dates Viewset
class DatesViewSet(viewsets.ModelViewSet):
    queryset = Dates.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = DatesSerializer


#Project Viewset
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer