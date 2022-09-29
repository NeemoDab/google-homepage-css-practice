
import './App.css';
import Navigation from '../Nav/Nav';
import Logo from '../Logo/Logo';
import Input from '../Searchbar/Input';
import Button from '../Buttons/Button'
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
    <Navigation/>
    <Logo />
    <Input/>
    <Button />
    <Footer/>
    </div>
  );
}

export default App;
