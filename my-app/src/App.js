

import './App.css';
import Homepage from "./Homepage.js"
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Profile from "./profile/Profile"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/profile" element = {<Profile />} />
      {/* <div className="App">
        <Homepage />
      </div> */}
    </Routes>
      
    </BrowserRouter>

  );
}

export default App;
