import './App.css';
import MaMButton from './components/MaMButton';
import Sidebar from './components/Sidebar';
import Preferences from './components/Preferences';

function App() {


  return (
    <div className="App">
      <MaMButton>
        <Sidebar />
        <Preferences />
      </MaMButton>
    </div>
  );
}

export default App;
