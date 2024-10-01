Overview Gemini Chatbot is an AI-powered conversational agent designed to engage with users, offering empathetic and supportive conversations. It can detect the sentiment of a user and provide positive, encouraging responses, especially for users who may feel low or depressed. The chatbot uses Google Gemini AI (Generative AI) to provide natural responses, and it is hosted on a Flask web application.

Features Sentiment-Based Conversations: The chatbot encourages users and offers positive dialogue to help them feel better. Generative AI Model: The chatbot leverages Google's Gemini AI to generate realistic, human-like responses. Memory Handling: The chatbot stores non-question statements in memory and recalls them when needed. Session Management: Keeps track of conversation history, with a cap of 10 previous messages. Pastel Color UI: Each chat message appears with randomly generated pastel colors to make the conversation visually appealing.

Requirements Python 3.8+ Flask: A lightweight Python web framework. google-generativeai: Google's Generative AI SDK. Python-dotenv: To load environment variables. NLTK (Natural Language Toolkit): For detecting questions. re :for detecting question

Python Libraries Install the required Python libraries using pip: image

File Structure

Setup Instructions Step 1: Clone the Repository Clone this repository to your local system: image

Step 2: Set Up Virtual Environment Create and activate a virtual environment for Python dependencies: image

Step 3: Install Dependencies Install the necessary Python libraries:

Step 4: Set Up Environment Variables Create a .env file in the root of your project and add your Google API key: image

Step 5: Run the Flask App After setting everything up, run the application: image The application will run on http://127.0.0.1:5000/ by default.

To run this chatbot, you need the following installed on your system:

Python 3.8+ Flask: A lightweight Python web framework. google-generativeai: Google's Generative AI SDK. Python-dotenv: To load environment variables. NLTK (Natural Language Toolkit): For detecting questions. Python Libraries Install the required Python libraries using pip:

bash Copy code pip install Flask python-dotenv google-generativeai nltk File Structure bash Copy code GeminiChatBot/ │ ├── app.py # Main Flask application ├── templates/ │ └── index.html # HTML file for the UI ├── .env # Environment file containing API key ├── README.md # This readme file └── static/ # CSS/JS for custom styling └──css | └──style.css └──js └──script.js Setup Instructions

Step 1: Clone the Repository Clone this repository to your local system:

git clone https://github.com/yourusername/GeminiChatBot.git cd GeminiChatBot

Step 2: Set Up Virtual Environment Create and activate a virtual environment for Python dependencies:

Create virtual environment
python -m venv env

Activate virtual environment (Windows)
env\Scripts\activate

Activate virtual environment (Linux/Mac)
source env/bin/activate Step 3: Install Dependencies Install the necessary Python libraries:

bash Copy code pip install Flask python-dotenv google-generativeai nltk Step 4: Set Up Environment Variables Create a .env file in the root of your project and add your Google API key:

makefile Copy code GOOGLE_API_KEY=your-google-api-key You can obtain the API key from the Google Cloud Console after enabling Generative AI API.

Step 5: Download NLTK Data (Optional) You need to download specific NLTK data for tokenizing and processing text. Open a Python shell and run the following commands:

python Copy code import nltk nltk.download('punkt') This will download the necessary tokenizer files to your NLTK data folder.

Step 6: Run the Flask App After setting everything up, run the application:

python app.py The application will run on http://127.0.0.1:5000/ by default.

Usage Instructions

Start the Application Once you run the app, open your browser and go to http://127.0.0.1:5000/. You will see a simple chat interface.

Chat with the Bot You can type any message, and the chatbot will respond based on its understanding of the text. If the bot detects a question, it will directly respond. If the input is a statement, the bot stores the statement in its memory and continues to converse. The chatbot maintains a history of the last messages, which is displayed in the chat window.

Key Functions in the Application

get_gemini_response(question, prompt, mem) This function interacts with the Google Gemini Generative AI and generates a response based on the user’s input (question), the chatbot prompt, and the chatbot's memory.

is_question(text) This function uses basic NLP techniques to detect if a user input is a question or a statement. It checks for question marks and common question words like "what", "why", etc.

get_random_pastel_color() Generates a random pastel color for use in the UI, ensuring that each user and bot message has a visually distinct color.

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 1 watching
Forks
 1 fork
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Languages
CSS
31.3%
 
JavaScript
31.3%
 
Python
21.7%
 
HTML
15.7%
Suggested workflows
Based on your tech stack
Publish Node.js Package logo
Publish Node.js Package
Publishes a Node.js package to npm.
Python Package using Anaconda logo
Python Package using Anaconda
Create and test a Python package on multiple Python versions using Anaconda for package management.
SLSA Generic generator logo
SLSA Generic generator
Generate SLSA3 provenance for your existing release workflows
More workflows
Footer
© 2024
