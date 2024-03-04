import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import LoginForm from './Components/LoginForm';
import Textform from './Textform';

function App() {
  return (
    <>
    <Navbar title="Contact Us" title2="Home" title3="About"></Navbar  >
    <LoginForm></LoginForm>
    <div></div>
    <Textform></Textform>
    </>
  );
}

export default App;
