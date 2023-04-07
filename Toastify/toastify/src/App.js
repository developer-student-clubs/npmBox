import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Login from "./Components/Login";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
