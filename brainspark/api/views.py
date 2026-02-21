from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import os

@api_view(['POST'])
def generate(request):
    prompt = request.data.get("prompt") 

    if not prompt:
        return Response({"error": "No prompt provided"}, status=400)

    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        return Response({"error": "OpenRouter API key not set"}, status=500)

    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.7 
            },
            timeout=30  
        )
        print("OpenRouter status:", response.status_code)
        print("OpenRouter response:", response.text)

        data = response.json()
        if response.status_code != 200:
            return Response({"error": data}, status=response.status_code)
        return Response({"result": data["choices"][0]["message"]["content"]})

    except requests.exceptions.RequestException as e:
        return Response({"error": f"Request failed: {str(e)}"}, status=500)
    except Exception as e:
        return Response({"error": str(e)}, status=500)