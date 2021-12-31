import { useState } from 'react';
import NumericInput from 'react-numeric-input';
import "./index.css";

const workoutJson = require('./data/workouts.json'); //with path

const App = () => {
    const [qty, setQty] = useState(0);

    // console.log(qty)
    // console.log(workoutJson["gifUrl"][qty])

    const exercise = workoutJson["gifUrl"][qty]
    const exerciseName = workoutJson["name"][qty]

  return (
    <div className="App">
        <h1>Simple exercise chooser</h1>

        <img src={exercise} alt="exercise gif" />
        <h4> {exerciseName} </h4>

        <div className="ChoiceDiv">
            <label>
                Chosen workout:
                <NumericInput 
                name="choice" 
                id="choice"
                min={0} 
                max={324} 
                value={qty} 
                onChange={(value) => setQty(value)}
                />
            </label>
        </div>

        <h4>
            <a href="https://services.jms.rocks">
                Created by James Twose
            </a>
        </h4>
        

    </div>
  );
}

export default App;