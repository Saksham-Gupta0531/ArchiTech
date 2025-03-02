from rest_framework import serializers
from .models import FloorPlan

class FloorPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = FloorPlan
        fields = '__all__'
        extra_kwargs = {
            'house_type': {'required': True},
            'total_land_dimension': {'required': True},
        }

    def validate(self, data):
        """Custom validation to ensure at least one room dimension is provided."""
        if not any(
            data.get(field) for field in [
                'guest_room_dimension', 'bedroom_dimension', 'living_room_dimension',
                'garage_dimension', 'Bathroom_dimension', 'kitchen_dimension',
                'balcony_dimension', 'dining_room_dimension', 'foyer_dimension'
            ]
        ):
            raise serializers.ValidationError("At least one room dimension must be provided.")
        return data
