from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from .models import FloorPlan
from .seriealizers import FloorPlanSerializer
from openai import OpenAI
import os

class GenerateHouseMapView(APIView):
    client = OpenAI(
    api_key='''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''',
    ) 

    def post(self, request):
        serializer = FloorPlanSerializer(data=request.data)
        if serializer.is_valid():
            try:
                floor_plan = serializer.save()
                data = request.data

                # Select the correct prompt generator method
                house_type = data.get("house_type")
                if house_type == "Studio":
                    prompt = self.generate_studio(data)
                elif house_type == "Villa":
                    prompt = self.generate_villa(data)
                elif house_type == "Luxury House":
                    prompt = self.generate_luxury_house(data)
                elif house_type == "Standard House":
                    prompt = self.generate_standard_house(data)
                else:
                    return Response({"error": "Invalid house type"}, status=status.HTTP_400_BAD_REQUEST)

                # Call OpenAI API
                response = self.client.images.generate(
                    model="dall-e-3",
                    prompt=prompt,
                    n=1,
                    size="1024x1024"
                )

                print("OpenAI Response:", response)  # Debugging Log

                # Extract and send the image URL
                if response.data:
                    image_obj = response.data[0]  # Extract the Image object
                    image_url = image_obj.url  # Get the image URL from the object
                    return JsonResponse({"image_url": image_url})
                else:
                    return JsonResponse({"error": "No image generated"}, status=500)

            except Exception as e:
                print("Error:", str(e))  # Log the error
                return JsonResponse({"error": str(e)}, status=500)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def generate_studio(self, data):
        return f'''Generate a detailed single-story modern studio house floor plan measuring {data.get('total_land_dimension')}. 
        The studio should feature an open-concept design where the living room ({data.get('living_room_dimension')} feet) is directly connected to the kitchen ({data.get('kitchen_dimension')} feet) without partitions.
        A well-organized bathroom ({data.get('bathroom_dimension')} feet).
        The layout should be functional, aesthetically appealing, and clearly labeled, following a top-down architectural blueprint style with black-and-white technical detailing.
        Keep Vastu Shastra principles in mind.
        Ensure dimensions are clearly visible and well-proportioned.
        '''

    def generate_villa(self, data):
        return f'''Generate a detailed single-story modern villa floor plan measuring {data.get('total_land_dimension')}. 
        The villa should include 4 bedrooms ({data.get('bedroom_dimension')}), 3 bathrooms ({data.get('bathroom_dimension')} feet), a spacious 
        living room ({data.get('living_room_dimension')} feet), an open kitchen ({data.get('kitchen_dimension')}), a dining area ({data.get('dining_room_dimension')} feet), and a large balcony ({data.get('balcony_dimension')} feet).
        Additionally, incorporate a two-car garage ({data.get('garage_dimension')} feet) and a front porch. 
        The layout should be functional, aesthetically appealing, and clearly labeled, following a top-down architectural blueprint style with black-and-white technical detailing.
        Keep Vastu Shastra in mind.
        Make sure dimensions are clearly mentioned generate 2D MAP Only.
        '''

    def generate_luxury_house(self, data):
        return f'''Generate a floor plan of a single-story luxury modern house. The house should include:
        A living room ({data.get('living_room_dimension')}) on the left side of the house, connected to a {data.get('kitchen_dimension')} kitchen with an island and a dining area.
        Two bedrooms: one {data.get('bedroom_dimension')} master bedroom with an en-suite bathroom ({data.get('bathroom_dimension')}) and a walk-in closet, and one guest bedroom.
        A front entrance with a {data.get('foyer_dimension')} foyer leading into the living room.
        Windows should be placed on the south and west sides, and a garage (20x20 feet) should be connected to the kitchen.
        Ensure the design follows the principles of Vastu Shastra.
        Avoid mentioning unnecessary elements, but make the dimensions clear and understandable.
        The total land dimension is {data.get('total_land_dimension')}.
        '''

    def generate_standard_house(self, data):  
        return f'''Generate a floor plan outline of a single-story standard house. The house should include:
        A living room ({data.get('living_room_dimension')}) on the left side of the house, connected to a {data.get('kitchen_dimension')} feet kitchen with an L-shaped kitchen table.
        Two bedrooms with a walk-in closet, and one {data.get('bedroom_dimension')} guest bedroom.
        A front entrance with a {data.get('foyer_dimension')} foyer leading into the living room.
        The theme should be luxurious.
        North-facing orientation, with the entrance on the east side.
        Only provide an outline—dimensioned rectangles for clear understanding of the plan.
        Keep the Vastu Shastra principles in mind.
        Make sure dimensions are mentioned clearly.
        The size of land is {data.get('total_land_dimension')}.
        '''
