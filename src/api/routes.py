"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import json

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def crear_usuario():
    user = json.loads(request.data)
    new_user = User(
        email=user['email'],
        password=user['password'],
        is_active=user['is_active']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado correctamente"}), 200

@api.route('/users', methods=['GET'])
def get_users():
    user = User.query.all()
    if user == []:
        return jsonify({"msg": "El usuario no existe"}), 404
    response_body = list(map(lambda user: user.serialize(), user))
    return jsonify(response_body)
    
@api.route('/login', methods=['POST'])
def login_user():
    email = request.json.get('email')
    password = request.json.get('password')
    user_exist = User.query.filter_by(email=email, password=password).first()
    if user_exist:
        access_token = create_access_token(identity=email)
        return jsonify({"token": access_token}), 200
    else:
        return jsonify({"msg": "Incorrect user or password"}), 401
    
@api.route('/prueba_protegida')
@jwt_required()
def ruta_protegida():
    current_user = get_jwt_identity()
    if current_user is not None:
        return jsonify(current_user), 200
    return jsonify({"msg": "No estas autorizado a consumir esta ruta"}), 401