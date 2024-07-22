import React from 'react'
import '../styles/MaMButton.css'


function MaMButton() {

  return (
    <div>
        <div className='MakeaMealBtnContainer'>
            <div className='MakeaMealBtnBackground' id='MakeaMealBtnBackground'></div>
            <button className='MakeaMealBtn'>Make a Meal</button>
        </div>
        <div className='MealCard'>

        </div>
    </div>
  )
}

export default MaMButton