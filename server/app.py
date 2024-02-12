# app
from flask import Flask
from flask_migrate import Migrate
from models import db,Purchase,Contact,Reviews,Coffee

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///coffee.db'
app.config['SQLITE_TRACK_MODIFICATION'] = False
app.json.compact = False

migrate = Migrate(app,db)
db.init_app(app)
