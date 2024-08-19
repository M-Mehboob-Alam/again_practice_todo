import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Todo from './components/Todo/Todo';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar/>
      <Todo/>
    </div>
  );
}

export default App;
