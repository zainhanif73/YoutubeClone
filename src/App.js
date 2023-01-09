import { Suspense } from 'react';
import Main from './Components/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Channel from './Components/Channel/Channel';


function App() {

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div></div>}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path='/channel/:id'
          element={
            <Suspense fallback={<div></div>}>
              <Channel />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
