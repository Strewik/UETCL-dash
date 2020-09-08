from .models import *
from rest_framework import viewsets, permissions
from .serializers import *


# Dates Viewset
class DatesViewSet(viewsets.ModelViewSet):
    # queryset = Dates.objects.all()
    permission_class = [
        permissions.IsAuthenticated
        # permissions.AllowAny
    ]

    serializer_class = DatesSerializer

    def get_queryset(self):
        return self.request.user.dates.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Project Viewset
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer
