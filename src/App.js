
import './App.css';
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
  
  
        <Routes>
        
          <Route exact path="/" element={<Newscomponent key="general" pageSize={5} country="us" category="general"/>}/>
          <Route exact path="/business" element={<Newscomponent key="business" pageSize={5} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<Newscomponent key="entertainment"pageSize={5} country="us" category="entertainment"/>}/>
          <Route exact path="/general" element={<Newscomponent key="general" pageSize={5} country="us" category="general"/>}/>
          <Route exact path="/health" element={<Newscomponent key="health" pageSize={5} country="us" category="health"/>}/>
          <Route exact path="/science" element={<Newscomponent key="science" pageSize={5} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<Newscomponent key="sports" pageSize={5} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<Newscomponent key="technology" pageSize={5} country="us" category="technology"/>}/>
         
        </Routes>
     
  </Router>
    </div>
  
  );
}

export default App;
