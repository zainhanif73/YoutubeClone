import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const [active, setActive] = useState(1)
  const [search, setSearch] = useState("")

  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-[180px] mt-8 md:mt-0'>
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div>
          <Dashboard active={active} setActive={setActive} />
        </div>
      </div>
    </>
  );
}

export default App;
