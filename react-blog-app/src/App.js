import './index.css';
import { Navbar } from './Navbar';
import { Home } from './Home';

//jsx code - template with logic
function App() {
  //any valid js can we written here
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      
    </div>
  );
}

export default App;
