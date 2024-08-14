import '../styles/MaMButton.css'


function Expand() {
    document.getElementById('MealCard').classList.add('expand')
    document.getElementById('MakeaMealBtnContainer').classList.add('hidden')
}
 
function MaMButton() {

  return (
    <div>
        <div className='MakeaMealBtnContainer' id='MakeaMealBtnContainer'>
            <div className='MakeaMealBtnBackground' id='MakeaMealBtnBackground'></div>
            <button className='MakeaMealBtn' onClick={Expand}>Make a Meal</button>
        </div>
        <div className='MealCard' id='MealCard'>
            <div className='sidebar'>
                <div class="login">
                    <h2>Log in</h2>
                    <input type="text" placeholder="Username" id="loginusername"/>
                    <input type="text" placeholder="Password" id="loginpassword"/>
                    <button id="loginbutton">Log in</button>
                </div>
            </div>
            <div className='content'>
                <div class="price">
                    <h2>Budget</h2>
                    <input type="number" name="price" placeholder="Price"/>
                    <button>5$</button>
                    <button>10$</button>
                    <button>15$</button>
                    <button>20$+</button>
                    <input type="number" name="time" placeholder="Time"/>
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
        </div>
    </div>
  )
}

export default MaMButton;