🩺 Patient Assistant – AI-Powered Medical Chatbot
Patient Assistant is a smart healthcare chatbot designed to assist users by answering health-related questions, providing medical information, and offering accessible interaction through a simple and intuitive web interface. The system integrates a fine-tuned medical language model with a retrieval-augmented architecture, enabling the chatbot to deliver context-aware and trustworthy answers.

🚀 Features
💬 Natural language chat interface for medical queries

🔍 RAG (Retrieval-Augmented Generation) system for evidence-based responses

🧠 Med-GEMMA LLM (fine-tuned for healthcare domain)

🔊 Text-to-Speech support for accessibility

📰 Explore section with health news, medication info, expert directories, and appointment features

🧓 User-friendly interface designed with elderly and accessibility needs in mind

🔐 Firebase-based user authentication & secure data storage

📊 Real-time chat history and multi-section layout (Home, Chat, Explore, Profile)

🛠️ Technologies Used
🧠 AI & NLP
Med-GEMMA (Google) – Fine-tuned for medical accuracy and safety

SentenceTransformers – For generating embeddings of medical datasets

Qdrant – Vector database for similarity search and semantic retrieval

Retrieval-Augmented Generation (RAG) – To ground model answers with real data

Prompt Engineering – Used to enhance model behavior in specific use cases

🌐 Backend
FastAPI – Lightweight Python-based web framework

Python 3.10+ – Primary backend programming language

RESTful API endpoints for search and chat integration

Custom temperature & token parameters to reduce hallucinations and allow long, informative responses

💻 Frontend
React – Component-based frontend framework

Zustand – Lightweight state management

Responsive UI – Optimized for desktop and tablet use

Text-to-Speech (TTS) – JavaScript-based voice playback of chatbot answers

Accessible components for all user groups

🔐 Authentication & Database
Firebase Authentication – Secure login and registration

Firebase Firestore – Real-time database for storing chat logs and user profiles

📁 Dataset Sources
Patient Assistant uses curated and cleaned medical datasets to power its RAG pipeline:

medical_qa

clinical_conditions_symptoms

nlp_dialogue_datasets

All datasets are processed and embedded into the Qdrant database in JSONL format with fields like question, answer, category, and source.

📷 UI Preview
Screens include:

Home Page with friendly chatbot robot visual & "Start Chat" button

Chat Interface with TTS functionality
![WhatsApp Image 2025-08-02 at 02 02 07](https://github.com/user-attachments/assets/e87d8685-98ee-4ed7-97fb-d922d469976b)
<img width="360" height="782" alt="Ekran Resmi 2025-08-05 10 29 24" src="https://github.com/user-attachments/assets/3625f078-0d59-4f35-aefe-2f3158a66458" />
<img width="360" height="782" alt="Ekran Resmi 2025-08-05 10 24 05" src="https://github.com/user-attachments/assets/01ccaf2e-88ae-41fd-9fbc-90813f1b7d83" />

<img width="360" height="782" alt="Ekran Resmi 2025-08-05 10 24 24" src="https://github.com/user-attachments/assets/3e3baa9a-5657-45f0-8636-a94d0680b996" />






Explore tab with health articles, expert lookup, and appointment module

Profile tab for user data and session history


