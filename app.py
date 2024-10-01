from flask import Flask, render_template, request, session, redirect, url_for
from dotenv import load_dotenv
import os
import google.generativeai as genai
import random

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.urandom(24)  # Required for session handling

# Configure the Generative AI model using API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize chat history in session if it doesn't exist
def init_session():
    if 'history' not in session:
        session['history'] = []

# Define function to get Gemini response
def get_gemini_response(question, prompt,mem):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content([prompt[0],mem[0], question])
    return response.text

# Define the initial prompt
prompt = [
    """You are Gem-EI, an expert in the sentiment analysis, you are given a brief description about the user below, you have to understand the emotions of the person you are conversing with,
    the person might be feeling low and depressed you have to encourage him and engage in positive convesations so that he or she
    might feel better and take their mind off the negative things. You should handle the user by yourself instead of telling them 
    to converse with someone else, try to be more like their friend and try to understand them the best you can. You are always there
    for them and make them feel loved. Ask the user always if they would want to chat If the user has any suicidal or vengeful or murderous thoughts you should try to divert his mind from these 
    negative thoughts and encourage positivity and give solutions on how to confront these emotions peacefully.
    \n Example 1 - I had a really bad day at school today; The response
    should be something like - Dont worry we all have highs and lows, if u want we can chat a bit more and get it off your chest. \n
    Example 2 - I am not good enough for anything; The response should be something like - You are wrong, you mean the world
    to your loved ones you will always be good enough for them and can always rely on them. \n Example 3 - Thankyou or Thanks; The response should
    be like - Welcome, I am always here for you, do you wanna chat about something else? \n Following is the description of user and it is only to be used
    when the user asks something about themselves. If they dont ask something about themselves dont read the description \n Following is the description of user and it is only to be used
    when the user asks something about themselves. If they dont ask something about themselves dont read the description.Don't read the user description until user ask for it."""]


mem = ['''This is a brief description about the user which is to be read only when user asks about themselves like name, age , birthday etc .Until dont tell about user if not asked''']

# Route for home page
@app.route("/", methods=["GET", "POST"])
def index():
    init_session()
    if request.method == "POST":
        question = request.form.get("message")
        mem[0]=mem[0]+question+"."
        
        if question:
            response = get_gemini_response(question, prompt,mem)
            # Insert new conversation at the beginning of the chat history
            session['history'].insert(0, {
                "user": question,
                "gem": response,
                "user_color": get_random_pastel_color(),
                "gem_color": get_random_pastel_color(),
            })
            # Keep only the latest 10 messages
            session['history'] = session['history'][:10]
    
    return render_template("index.html", history=session.get("history", []))

# Function to generate random pastel colors
def get_random_pastel_color():
    r = lambda: random.randint(128, 255)
    return f'rgb({r()},{r()},{r()})'


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)



