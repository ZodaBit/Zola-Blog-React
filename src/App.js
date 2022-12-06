import logo from './logo.svg';
import './App.css';

function App() {
  const title='Welecome to Zoda blog';
  const like=50;
  const webLink="https://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times</p>

        <p>{10}</p>
        <p>10</p>
        <p>{"hallo zoda"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() *20}</p>
     <a href={webLink}>Google</a>
      </div>
    </div>
  );
}

export default App;
