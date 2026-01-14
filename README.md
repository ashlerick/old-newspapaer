# 🦇 THE GOTHAM ARCHIVE

[**View Live Demo**](https://ashlerick.github.io/old-newspaper/)

A full-stack automation project that transforms live global news into a vintage newspaper dispatch. This application bridges a static frontend with a dynamic, serverless Python backend.

## 🏗️ Architecture
This project is built using a decoupled architecture to showcase modern web development and automation practices:

* **Frontend:** Hosted on **GitHub Pages**, providing a fast, static user interface for the public.
* **Backend (Automation):** Powered by **Serverless Vercel Functions**, handling complex logic without a persistent server.
* **Framework:** **FastAPI (Python)** manages the routing and communication between the UI and the news wires.
* **Automation Logic:** A custom Python engine that fetches data, sanitizes text, and renders high-quality images on the fly.

## 🚀 Key Features
* **Live News Fetching:** Real-time integration with NewsAPI to pull global headlines based on user-defined topics.
* **Automated Image Rendering:** Uses the **Pillow (PIL)** library to dynamically "print" text onto a digital vintage paper canvas.
* **Intelligent Text Wrapping:** Custom logic calculates boundaries to ensure headlines and snippets wrap perfectly within the paper edges.
* **Data Sanitization:** A robust cleaning function that handles UTF-8 encoding to prevent "tofu" boxes and character errors in the print.
* **Base64 Streaming:** Efficiently streams binary image data from the Vercel backend directly to the browser for instant rendering.

## 🛠️ Tech Stack
* **Frontend:** GitHub Pages (HTML5, CSS3, Vanilla JavaScript)
* **Backend:** Vercel Serverless Functions
* **API Framework:** FastAPI (Python)
* **Image Processing:** Pillow (PIL)
* **Data Source:** NewsAPI.org

## ⚙️ How the Automation Works
1. The **GitHub Pages** frontend captures a user topic and sends it to the **Vercel** endpoint.
2. The **FastAPI** backend receives the request and queries the News API for relevant stories.
3. The **Python** script processes the raw JSON, wraps the text into readable blocks, and draws it onto a sepia-toned background.
4. The final "newspaper" image is returned as a **Base64 string** and rendered instantly on the user's screen.

## 🗄️ Project Structure
```text
old-newspaper/
├── index.html    # Static UI (GitHub Pages)
├── style.css     # Vintage newspaper styling
├── script.js     # Frontend logic & API communication
├── favicon.ico   # Site branding
└── README.md     # Documentation
