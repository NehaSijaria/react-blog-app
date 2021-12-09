
import './App.css';
//jsx code - template with logic
function App() {
  //any valid js can we written here
  const title = 'welcome app component';
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked { likes } </p>
        
      </div>
      
    </div>
  );
}

export default App;
