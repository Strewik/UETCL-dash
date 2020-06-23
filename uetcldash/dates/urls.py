from rest_framework import routers
from .api import DatesViewSet

router = routers.DefaultRouter()
router.register('api/dates', DatesViewSet, 'dates')

urlpatterns = router.urls