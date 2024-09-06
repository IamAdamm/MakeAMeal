import React from 'react'
import '../styles/Preferences.css'

function Preferences() {
  return (
    <div className='preferences'>
        <div class="budget">
            <h2>Budget</h2>
            <div class="budgetSliderContainer">
                <input id='budgetSlider' type='range' min= '1' max='20'/>
                <div className='budgetSliderLabels'>
                    <span>1€</span>
                    <span>5€</span>
                    <span>10€</span>
                    <span>15€</span>
                    <span>20€</span>
                </div>
            </div>
        </div>
        <div class="macros">
            <h2>Macros</h2>
            <input type="number" name="Calories" placeholder="Calories"/>
            <input type="number" name="Protein" placeholder="Protein"/>
            <input type="number" name="Sugar" placeholder="Sugar"/>
            <input type="number" name="Fat" placeholder="Fat"/>
            <input type="number" name="Carbs" placeholder="Carbs"/>
        </div>
        <div class="generatebtn">
            <button id="generatebtn">Generate</button>
        </div>
    </div>
  )
}

export default Preferences