import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const [active, setActive] = useState(1)

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-[180px]'>
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
