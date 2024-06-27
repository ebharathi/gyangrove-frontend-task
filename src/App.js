import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Recommend from './Components/Recommend/Recommend';
import Events from './Components/Events/Events';
function App() {
  return (
    <div className="App font-inter">
       <Navbar/>
       <Recommend/>
       <Events/>
    </div>
  );
}

export default App;
