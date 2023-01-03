import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-[300px]'>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
