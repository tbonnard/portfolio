from flask import Flask, render_template, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email
from wtforms.fields.html5 import EmailField
import smtplib
from flask_bootstrap import Bootstrap
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
Bootstrap(app)


my_email = os.environ.get('my_email')
to_email = os.environ.get('to_email')
pwd = os.environ.get('password_gm')


def send_email(name, message):
    #print(f"my email : {my_email}")
    #print(f"to email: {to_email}")
    #print(f"my pass: {pwd}")
    message_to_send = f"Subject:Portfolio: message de {name}! \n\n{message}"
    with smtplib.SMTP("smtp.gmail.com", port=587) as connection:
        connection.starttls()
        connection.login(user=my_email, password=pwd)
        connection.sendmail(from_addr=my_email, to_addrs=to_email, msg=message_to_send.encode(encoding='UTF-8'))


class ContactForm(FlaskForm):
    name = StringField('Votre nom', validators=[DataRequired()], render_kw={'placeholder':'Votre nom'})
    email = EmailField('Votre courriel', validators=[DataRequired(), Email()], render_kw={'placeholder':'Votre courriel'})
    message = TextAreaField('Votre message', validators=[DataRequired()], render_kw={"rows": 8, 'placeholder':'Votre message'})
    submit = SubmitField("Envoyer le message")


@app.route('/', methods=["GET", "POST"])
def home():
    form = ContactForm()
    if form.validate_on_submit():
        name = form.name.data
        message = f'Message recu de "{name}" ({form.email.data}) \n\n "{form.message.data}"'
        send_email(name, message)
        return redirect(url_for('thank_you'))
    return render_template('index.html', form=form)


@app.route('/merci')
def thank_you():
    return render_template('merci.html')


if __name__ == '__main__':
    app.run(debug=True)