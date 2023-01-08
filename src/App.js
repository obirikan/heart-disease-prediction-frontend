import Content from "./Components/Content";
import Feed from "./Components/Feed";
import Main from "./Components/Main";
import Image from "./Pages/Image";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    //routing
    <BrowserRouter>
      <Routes>
         <Route path='/main' element={<Main/>}/>
         <Route path='/' element={<Image/>}/>
         <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
