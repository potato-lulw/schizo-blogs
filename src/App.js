

import Navbar from './components/navbar';
import Home from './components/home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/create';
import BlogDetails from './components/blog-details';

function App() {
  return (
    <Router>
      <div className="App font-quicksand m-0 text-[#333]">
        <Navbar />
        <div className="content max-w-[600px] my-[40px] mx-auto p-[20px]">
          <Routes>
            <Route path='/' element={<Home/>} />
            
            <Route path='/create' element={<Create/>} />

            <Route path='/blogs/:id' element={<BlogDetails/>}/>
            
          </Routes>
          
        </div>
      </div>
    </Router>

  );
}

export default App;
