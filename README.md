# 🛡️ SecuriFeed – PhishDetect

<p align="center">
  <img src="https://img.shields.io/badge/Cybrexa-Project%2003-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Cybersecurity-Phishing%20Detection-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/JavaScript-Frontend-yellow?style=for-the-badge">
</p>

<p align="center">
  🔐 A Modern Cybersecurity Web Application for Detecting Suspicious URLs, Learning Phishing Indicators, and Improving Cyber Awareness.
</p>

---

# 🚀 Project Overview

**SecuriFeed – PhishDetect** is a cybersecurity-focused web application designed to help users identify potentially dangerous phishing URLs through risk analysis and pattern detection.

The project analyzes URLs using multiple security checks such as:

✅ HTTPS Verification
✅ IP Address URL Detection
✅ Typosquatting Detection
✅ Lookalike Character Detection
✅ Suspicious Keyword Detection
✅ URL Length Analysis

In addition to URL analysis, the application also provides:

📰 Cyber Safety Feed
🎮 Interactive Phishing Awareness Quiz
📊 Risk Score Visualization
🔒 Cybersecurity Awareness Content

This project was developed as part of the **Cybrexa Cyber Security Project Series**.

---

# 🎯 Project Objectives

The primary goals of this project are:

* Improve cybersecurity awareness
* Teach users how phishing attacks work
* Detect suspicious URLs using JavaScript and Regex
* Demonstrate frontend security concepts
* Build practical cybersecurity projects for learning

---

# ⚡ Key Features

## 🔍 URL Risk Analyzer

Analyze any URL and receive a security risk score.

Features:

* HTTPS Detection
* Suspicious Pattern Detection
* URL Length Analysis
* Risk Scoring System
* Visual Security Indicators
* Domain Information Extraction

---

## 📊 Risk Score System

Each URL receives a score between:

| Score    | Risk Level     |
| -------- | -------------- |
| 0 - 35   | 🟢 Low Risk    |
| 36 - 70  | 🟡 Medium Risk |
| 71 - 100 | 🔴 High Risk   |

The system provides visual feedback using colored indicators and security messages.

---

## 🌐 Domain Information Panel

Displays:

* Protocol Type
* Domain Name
* URL Length
* Security Indicators

This helps users understand the structure of a URL before visiting it.

---

## 🚨 Phishing Pattern Detection

The application checks for common phishing indicators such as:

### Suspicious Keywords

* login
* verify
* secure
* update
* account
* bank
* urgent
* free
* gift

### Typosquatting Domains

Examples:

* paypa1.com
* g00gle.com
* instagrarn.com
* linkedln.com

These domains attempt to mimic legitimate websites.

---

## 📰 Cyber Safety Feed

The Cyber Safety Feed provides educational content regarding:

* Phishing Attacks
* HTTPS Security
* Fake Login Pages
* Multi-Factor Authentication
* Social Engineering Attacks
* Password Security

---

## 🎮 Phishing Awareness Quiz

Interactive quiz section containing multiple phishing scenarios.

Users can:

* Identify Safe URLs
* Identify Phishing URLs
* Learn through explanations
* Improve cybersecurity awareness

The quiz includes:

✅ Real Domains
✅ Fake Domains
✅ Typosquatting Examples
✅ Suspicious Banking URLs
✅ Social Media Phishing Examples

---

# 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Cybersecurity Concepts

* Regex Pattern Matching
* URL Validation
* Phishing Detection Logic
* Typosquatting Analysis
* Domain Parsing

### UI Design

* Glassmorphism
* Responsive Design
* Modern Cyber Theme
* Neon Security Interface

---

# 📂 Project Structure

```bash
Cybrexa_03_SecuriFeed/
│
├── index.html
│
├── css/
│   ├── main.css
│   ├── analyzer.css
│   └── news.css
│
├── js/
│   ├── app.js
│   ├── analyzer.js
│   ├── news-feed.js
│   └── game.js
│
├── data/
│   └── news-data.json
│
├── README.md
└── SECURITY.md
```

---

# 💻 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Cybrexa_03_SecuriFeed.git
```

### Open Project

```bash
cd Cybrexa_03_SecuriFeed
```

### Run

Open:

```bash
index.html
```

Or use:

```bash
Live Server
```

inside Visual Studio Code.

---

# 🔬 How Detection Works

The application performs several checks:

### Step 1

Check if URL uses HTTPS.

### Step 2

Detect IP-based URLs.

Example:

```text
http://192.168.1.1/login
```

### Step 3

Search for suspicious phishing keywords.

### Step 4

Check for typosquatting.

Example:

```text
paypa1.com
```

instead of

```text
paypal.com
```

### Step 5

Generate a final risk score.

---

# 📈 Learning Outcomes

By building this project I learned:

✅ URL Structure Analysis

✅ JavaScript DOM Manipulation

✅ Regex Pattern Matching

✅ Cybersecurity Fundamentals

✅ Phishing Detection Techniques

✅ Responsive UI Design

✅ Risk Assessment Logic

✅ Frontend Project Deployment

---

# 🔐 Security Disclaimer

This project is intended for:

* Educational Purposes
* Learning Cybersecurity Concepts
* Demonstration of Phishing Detection Logic

This application should not be used as a replacement for enterprise-grade security solutions.

---

# 🌟 Future Improvements

Planned features:

* Real SSL Certificate Validation
* WHOIS Domain Lookup
* Threat Intelligence Integration
* VirusTotal API Integration
* Domain Reputation System
* AI-Based URL Classification
* Browser Extension Version

---

# 👩‍💻 Developer

**Gauri Somwanshi❤️**

---

# 📜 License

This project is licensed under the MIT License.

---


