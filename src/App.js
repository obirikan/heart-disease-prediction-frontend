import Content from "./Components/Content";
import Feed from "./Components/Feed";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route path='/main' element={<Main/>}/>
         <Route path='/' element={<Content/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
