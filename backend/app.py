import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Load email credentials from environment variables
EMAIL_ADDRESS = os.environ.get('CONTACT_EMAIL_USER', '')
EMAIL_PASSWORD = os.environ.get('CONTACT_EMAIL_PASS', '')
EMAIL_TO = os.environ.get('CONTACT_EMAIL_TO', EMAIL_ADDRESS)

# Check for missing environment variables at startup
if not EMAIL_ADDRESS or not EMAIL_PASSWORD or not EMAIL_TO:
    raise RuntimeError("Missing required email environment variables. Please set CONTACT_EMAIL_USER, CONTACT_EMAIL_PASS, and CONTACT_EMAIL_TO.")

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    if not all([name, email, subject, message]):
        return jsonify({'success': False, 'error': 'Missing fields'}), 400

    # Compose email
    msg = MIMEMultipart()
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = EMAIL_TO
    msg['Subject'] = f"Contact Form: {subject}"
    body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, EMAIL_TO, msg.as_string())
        return jsonify({'success': True, 'message': 'Message sent successfully'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 