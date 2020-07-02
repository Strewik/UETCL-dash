from .models import Dates 
from rest_framework import viewsets, permissions
from .serializers import DatesSerializer

#Dates Viewset
class DatesViewSet(viewsets.ModelViewSet):
    queryset = Dates.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = DatesSerializer