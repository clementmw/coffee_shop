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
    reviews =[
  {"customer_name": "Wanjiku Maina", "review": "I love the variety of coffee options at Blackwood Coffee. The menu caters to all tastes, and each drink is crafted with precision."},
  {"customer_name": "Kimani Gitonga", "review": "As a regular customer, I can vouch for the consistency of Blackwood Coffee. Every cup feels like a treat."},
  {"customer_name": "Njeri Kariuki", "review": "The ambiance is calming, and the coffee is exceptional. Blackwood Coffee has become my favorite spot for a peaceful coffee break."},
  {"customer_name": "Ochieng Omondi", "review": "The staff here is attentive and knowledgeable. They're always ready to recommend something new, and I've never been disappointed."},
  {"customer_name": "Achieng Ouma", "review": "Blackwood Coffee provides a welcoming environment for remote work. I appreciate the free Wi-Fi and the quality coffee that keeps me fueled throughout the day."},
  {"customer_name": "Mwangi Muthoni", "review": "I hosted a small event at Blackwood Coffee, and the team was incredibly accommodating. The cozy setting added a wonderful touch to the gathering."},
    ]

    
    for review_data in reviews:
        new_review = Reviews(**review_data)
        db.session.add(new_review)
        db.session.commit()
        


print( "🦸‍♀️ Done seeding!")