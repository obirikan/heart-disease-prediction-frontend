import Content from "./Components/Content";
import Feed from "./Components/Feed";
import Main from "./Components/Main";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route path='/main' element={<Main/>}/>
         <Route path='/' element={<Content/>}/>
         <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
