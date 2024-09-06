import React from 'react'
import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <div>
        <div className='sidebar'>
            <div class="login">
                <h2>Log in</h2>
                <input type="text" placeholder="Username" id="loginusername"/>
                <input type="text" placeholder="Password" id="loginpassword"/>                    <button id="loginbutton">Log in</button>
            </div>
            <div class="diets">
                <h2>Diets</h2>
                <button id="veganbtn">Vegan</button>
                <button id="helalbtn">Helal</button>
                <button id="vegetarianbtn">Vegetarian</button>
                <button id="ketobtn">Keto</button>
                <button id="lowcarbbtn">Low-Carb</button>
                <button id="mediterraneanbtn">Mediterranean</button>
            </div>
            <div class="allergies">
                <h2>Allergies</h2>
                <button id="dairybtn">Dairy</button>
                <button id="nutbtn">Nut</button>
                <button id="glutenbtn">Gluten</button>
                <button id="soybtn">Soy</button>
                <button id="fishbtn">Fish</button>
                <button id="eggsbtn">Eggs</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar