from openai import OpenAI
import os

client = OpenAI(
  api_key='''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''',
)


response = client.images.generate(
    model="dall-e-3",
    prompt="A professional 2D architectural floor plan of a house with two bedrooms, one kitchen, and one bathroom. The design should be minimalist and professional, with labeled rooms and walls in english",
    n=1,
    size="1024x1024"
)

print(response)