from django.db import models

class Dates(models.Model):
    project = models.CharField(blank=True, max_length=50)
    rapstart = models.CharField(blank=True, max_length=50)
    rapend = models.CharField(blank=True, max_length=50)
    pdpstart = models.CharField(blank=True, max_length=50)
    pdpstart = models.CharField(blank=True, max_length=50)
    resettlestart = models.CharField(blank=True, max_length=50)
    resettleend = models.CharField(blank=True, max_length=50)
    supervisionstart = models.CharField(blank=True, max_length=50)
    supervisionend = models.CharField(blank=True, max_length=50)
    epcstart = models.CharField(blank=True, max_length=50)
    epcend = models.CharField(blank=True, max_length=50)
    performstart = models.CharField(blank=True, max_length=50)
    performend = models.CharField(blank=True, max_length=50)
    advancestart = models.CharField(blank=True, max_length=50)
    advanceend = models.CharField(blank=True, max_length=50)
    insurestart = models.CharField(blank=True, max_length=50)
    insureend = models.CharField(blank=True, max_length=50)
    comment = models.CharField(blank=True, max_length=900)