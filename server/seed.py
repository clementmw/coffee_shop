# seeddata
from faker import Faker
from models import db, Coffee, Purchase, Reviews
from app import app
from random import choice as rc

fake = Faker()

with app.app_context():
    Coffee.query.delete()
    Reviews.query.delete()
    Purchase.query.delete()

    # Seed data for coffee
    coffees = [
        {"coffee_name": "Cappuccino", "description": "Espresso and steamed milk", "price": 400},
        {"coffee_name": "Latte", "description": "Espresso and steamed milk foam", "price": 500},
        {"coffee_name": "Americano", "description": "Espresso and hot water", "price": 350},
        {"coffee_name": "Mocha", "description": "Espresso, chocolate and steamed milk", "price": 450},
        {"coffee_name": "Macchiato", "description": "Espresso and steamed milk foam", "price": 500},
        {"coffee_name": "Flat White", "description": "Espresso and steamed milk foam", "price": 500},
        {"coffee_name": "Espresso", "description": "Espresso and hot water", "price": 300},
        {"coffee_name": "Cortado", "description": "Espresso and steamed milk foam", "price": 400},
        {"coffee_name": "Caffe Latte", "description": "Espresso and steamed milk foam", "price": 500},
        {"coffee_name": "Caffe Americano", "description": "Espresso and hot water", "price": 350}
    ]

    for coffee_data in coffees:
        new_coffee = Coffee(**coffee_data)
        db.session.add(new_coffee)
        db.session.commit()

    # print("Coffee data seeded successfully.")
# seed data for reviews
    reviews = [
           {"customer_name": "John Doe", "review": "I love this coffee Best coffiee shop in this town will definately recommend people here!"},
           {"customer_name": "Jane Smith", "review": "Best coffiee shop in this town will definately recommend people here"},
           {"customer_name": "Bob Johnson", "review": "I've never had a better cup of coffee, and the ambience of this place is perfect"},
       ]
    
    for review_data in reviews:
        new_review = Reviews(**review_data)
        db.session.add(new_review)
        db.session.commit()
    # print("Review data seeded successfully.")
        
# seed data for purchases
        # new_purchase = Purchase(
        #     coffee_id = rc(Coffee.query.all()).id,
        #     quantity_purchased = fake.random_int(min=1, max=5)
        # )
        # db.session.add(new_purchase)
        # db.session.commit()

print( "🦸‍♀️ Done seeding!")