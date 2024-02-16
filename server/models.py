# design models
from sqlalchemy.orm import validates
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
import re

db = SQLAlchemy()

class Coffee(db.Model,SerializerMixin):
    __tablename__ = 'coffees'
    id  = db.Column(db.Integer, primary_key = True)
    coffee_name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    # relationship to purchase
    purchase = db.relationship('Purchase',backref = 'coffee' )

    def serialize(self):
        return {
            'id':self.id,
            'coffee_name': self.coffee_name,
            'description': self.description,
            'price': self.price
        }

class Purchase(db.Model,SerializerMixin):
    __tablename__ = 'purchases'
    id = db.Column(db.Integer, primary_key = True)
    customer_name = db.Column(db.String)
    # relationship to coffee
    coffee_id = db.Column(db.Integer(), db.ForeignKey('coffees.id'))
    quantity = db.Column(db.Integer)
    total_price = db.Column(db.Integer)

    def serialize(self):
        return {
            'id':self.id,
            'coffee_id': self.coffee_id,
            'customer_name': self.customer_name,
            'quantity': self.quantity,
            'total_price':self.total_price
        }

class Contact(db.Model,SerializerMixin):
    __tablename__ = 'contacts'
    id = db.Column(db.Integer, primary_key = True)
    full_name = db.Column(db.String)
    email = db.Column(db.String)
    message = db.Column(db.String)

    # validate email 
    @validates('email')
    def validate_email(self, key, email):
        email_pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        
        if not re.match(email_pattern, email):
            raise ValueError('Invalid email format')
        
        return email
    #serialize
    def serialize(self):
        return{
            'id':self.id,
            'full_name': self.full_name,
            'email': self.email,
            'message': self.message,
        }

class Reviews(db.Model,SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    customer_name = db.Column(db.String)
    review = db.Column(db.String)

    def serialize(self):
        return {
            'id':self.id,
            'customer_name': self.customer_name,
            'review': self.review
        }
