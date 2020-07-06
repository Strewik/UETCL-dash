from rest_framework import routers
from .api import *


router = routers.DefaultRouter()
router.register('api/dates', DatesViewSet, 'dates')
router.register('api/project', ProjectViewSet, 'dates')

urlpatterns = router.urls
