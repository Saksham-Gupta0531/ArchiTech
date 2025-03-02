from django.db import models

class FloorPlan(models.Model):
    HOUSE_TYPES = [
        ('Studio', 'Studio'),
        ('Villa', 'Villa'),
        ('Luxury House', 'Luxury House'),
        ('Standard House', 'Standard House'),
    ]

    house_type = models.CharField(max_length=50, choices=HOUSE_TYPES)
    total_land_dimension = models.CharField(max_length=20)
    guest_room_dimension = models.CharField(max_length=20, blank=True, null=True)
    bedroom_dimension = models.CharField(max_length=20, blank=True, null=True)

    living_room_dimension = models.CharField(max_length=20, blank=True, null=True)
    garage_dimension = models.CharField(max_length=20, blank=True, null=True)
    Bathroom_dimension = models.CharField(max_length=20, blank=True, null=True)
    kitchen_dimension = models.CharField(max_length=20, blank=True, null=True)
    balcony_dimension = models.CharField(max_length=20, blank=True, null=True)
    dining_room_dimension = models.CharField(max_length=20, blank=True, null=True)
    foyer_dimension = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.house_type} Plan - {self.total_land_dimension}"
