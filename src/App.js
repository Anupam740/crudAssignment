import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
// import View from './pages/View';
// import About from './pages/About';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer position ="top-center"/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        
        <Route  path="/update" Component={AddEdit}/>
        {/* <Route  path="/view/:id" Component={View}/> */}
        
      </Routes>
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;