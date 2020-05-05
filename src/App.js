import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'

var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()

function App() {
  const [state, setState] = useState({})
  useEffect(() => {
    var incummingData = firebase.database().ref()
    incummingData.on('value', (snap)=> {
      let data = snap.val()
      setState({data})
    
    })
  }, [])
  const add = ()=> { 
    let count = state.data.count.number || 0
    count ++ 
    database.ref('/count').set({number: count })
  }
  return (
    <div className="App">
      {state.data? 
        <div>
         the count is: - 
         <p>{state.data.count.number}</p>
          <button onClick={add}>+</button>
        </div>
      : 'loading...'}
    </div>
  );
}

export default App;


/*
read 
lets make a counter
add inputs that pushs in data
and delete

*/