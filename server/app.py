# app
from flask import Flask,make_response,jsonify
from flask_migrate import Migrate
from models import db,Purchase,Contact,Reviews,Coffee
from flask_restful import Api,Resource
from flask_cors import CORS
from flask import request

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///coffee.db'
app.config['SQLITE_TRACK_MODIFICATION'] = False
app.json.compact = False


migrate = Migrate(app,db)
db.init_app(app)
api = Api(app)
CORS(app) #to link frontend

class CoffeeList(Resource):
    def get(self):
        get_coffie = [coffee.serialize()for coffee in Coffee.query.all()]
        response = make_response(jsonify(get_coffie),200)
        return response
    
    def post(self):
        data = request.get_json()
        coffee_name = data['coffee_name']
        description = data['description']
        price = data.get('price')
        # check if coffee already exists
        existing_coffee = Coffee.query.filter_by(coffee_name=coffee_name).first()
        if existing_coffee:
            return {"error": "Coffee already exists"}, 400
        else:
            new_coffee = Coffee(coffee_name=coffee_name, description=description, price=price)
            db.session.add(new_coffee)
            db.session.commit()

            response = make_response(jsonify(new_coffee.serialize()),200)
            return response
        
api.add_resource(CoffeeList,'/coffee')

class PurchaseList(Resource):
    def get(self):
        get_purchase = [purchase.serialize()for purchase in Purchase.query.all()]
        response = make_response(jsonify(get_purchase), 200)
        return response

    def post(self):
        data = request.get_json()
        customer_name = data['customer_name']
        coffee_id = data['coffee_id']
        quantity = data['quantity']
        total_price = data['total_price']
        new_purchase = Purchase(coffee_id=coffee_id, quantity=quantity, total_price=total_price, customer_name=customer_name)
        db.session.add(new_purchase)
        db.session.commit()

        response = make_response(jsonify(new_purchase.serialize()), 200)
        return response
        
api.add_resource(PurchaseList, '/purchase')

class ReviewList(Resource):
    def get(self):
        get_reviews = [review.serialize() for review in Reviews.query.all()]
        response = make_response(jsonify(get_reviews), 200)
        return response

    def post(self):
        data = request.get_json()
        customer_name = data['customer_name']
        review = data['review']

        new_review = Reviews(customer_name=customer_name, review=review)
        db.session.add(new_review)
        db.session.commit()

        response = make_response(jsonify(new_review.serialize()), 200)
        return response
    
    def patch(self, id):
        data = request.get_json()
        review = Reviews.query.get(id)
        if review:
            review.review = data['review']
            db.session.commit()
            return {"message": "Review updated successfully"}, 200
        else:
            return {"error": "Review not found"}, 404   
    
api.add_resource(ReviewList, '/reviews')

class ContactList(Resource):
    def get(self):
        get_contact = [contact.serialize() for contact in Contact.query.all()]
        response = make_response(jsonify(get_contact), 200)
        return response

    def post(self):
        data = request.get_json()
        full_name = data['full_name']
        email = data['email']
        message = data['message']

        new_contact = Contact(full_name=full_name, email=email, message=message)
        db.session.add(new_contact)
        db.session.commit()

        response = make_response(jsonify(new_contact.serialize()), 200)
        return response
    
api.add_resource(ContactList, '/contact')

class Delete(Resource):

    def get(self, id):
        contact = Contact.query.get(id)
        if contact:
            return contact.serialize(), 200
        else:
            return {"error": "Contact not found"}, 404
        
    def delete(self, id):
        contact = Contact.query.get(id)
        if contact:
            db.session.delete(contact)
            db.session.commit()
            return {"message": "contact deleted successfully"}, 200
        else:
            return {"error": "Contact not found"}, 404
        
api.add_resource(Delete, '/contact/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
