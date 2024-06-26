from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS
import pandas as pd
import pickle
import sklearn

import warnings

# Suppress the warning
warnings.filterwarnings('ignore', message='X does not have valid feature names')

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="http://localhost:5173")

# df.head(5)
connection_alive = True
@socketio.on('connect')
def handle_message():
    print('connected !')
    global connection_alive
    connection_alive = True

@socketio.on('disconnect')
def handle_message():
    print('disconnected !')
    global connection_alive
    connection_alive = False

@socketio.on('dataFetch')
def handle_message(data):
    import time
    model = pickle.load(open('model.pkl','rb'))
    df = pd.read_csv('bl_data.csv')

    print('Foo event received:', data)
    
    for index, row in df.iterrows():
        global connection_alive
        if not connection_alive:
            break  # Exit the loop if the connection is no longer alive
       
        features = row.drop('Label').values.reshape(1, -1)
        
        predictions=model.predict(features)
        print(predictions[0])
        status = ""
        if predictions[0] == 1:
            status="attack"
        else:
            status="normal"

        response = {"predicted": int(predictions[0]),"status": status }

        socketio.emit('dataFetch',response)
        time.sleep(2)
    


@app.route("/")
def hello_world():
    # print(df.head(5))
    # for index, row in df.iterrows():
    # Assuming 'model' is your machine learning model
    # prediction = model.predict(row)
    # print(prediction)
    return "<p>Hello, World!</p>"


# ds = df.sample(frac=1)

if __name__ == '__main__':
    socketio.run(app)


