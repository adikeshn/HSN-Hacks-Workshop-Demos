from flask import Flask, render_template, request
from simple_message import authenticate, send_message

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def email_form():
    if request.method == 'POST':
        for key, value in request.form.items():
            print(f'{key}: {value}')
        service = authenticate()
        info = request.form.items()
        send_message(service, info['recipient_email'], info['subject'], info['email_content'])

    return render_template("email-form.html")

if __name__ == '__main__':
    app.run(debug=True)