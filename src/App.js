import './App.css';
import Contact from './contact';
import Head from './Head';
import Home from './Home';
import Skills from './skills';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head/>
        <Home/>
        <Skills/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
