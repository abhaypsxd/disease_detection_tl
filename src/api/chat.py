import requests

API_URL = "https://chat-api-key.onrender.com/ask"
payload = {
    "question": "tell me that how i can basically crop some lettuce in my field if i am the complete begineer"
}

response = requests.post(API_URL, json=payload)
response.raise_for_status()
data = response.json()
print("Question:", data["question"])
print(" Answer:", data["answer"])
print("Sources:", "\n - " + "\n - ".join(data["sources"]))