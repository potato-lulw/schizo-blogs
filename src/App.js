

import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App font-quicksand m-0 text-[#333]">
      <Navbar/>
      <div className="content max-w-[600px] my-[40px] mx-auto p-[20px]">
        <Home />
      </div>
    </div>
  );
}

export default App;
