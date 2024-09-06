import { useState } from 'react'
import '../styles/MaMButton.css'


function Expand() {
    document.getElementById('MealCard').classList.add('expand')
    document.getElementById('MakeaMealBtnContainer').classList.add('hidden')
}

function MaMButton({children}) {


  return (
    <div>
        <div className='MakeaMealBtnContainer' id='MakeaMealBtnContainer'>
            <div className='MakeaMealBtnBackground' id='MakeaMealBtnBackground'></div>
            <button className='MakeaMealBtn' onClick={Expand}>Make a Meal</button>
        </div>
        <div className='MealCard' id='MealCard'>
            <h1 className='MealCardTitle'>Share your Requirements</h1>
            <div className='MealCardChildren'>
                {children} {/* Preferences and Sidebar */}
            </div>
        </div>
    </div>
  )
}

export default MaMButton;