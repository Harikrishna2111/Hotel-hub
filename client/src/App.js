import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import HotelScreen from './screens/HotelScreen';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HotelScreen/>
    </div>
  );
}

export default App;
