import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Welcome from './components/Welcome.js';
import Cards from './components/Cards.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <div className="App">
      <Menu />
      <Welcome />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
