
import './App.css';
//jsx code - template with logic
function App() {
  //any valid js can we written here
  const title = 'welcome app component';
  const likes = [50, 100];//return as string
  const link = "https://google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>liked { likes } </p>
        <p>{ [1,2,3] }</p>
        <a href={link}>Check me</a>
        {/* returned as string */}
      </div>
      
    </div>
  );
}

export default App;
