import { Suspense, useState } from 'react';
import Main from './Components/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Channel from './Components/Channel/Channel';
import Videoes from './Components/Videoes/Videoes';
import Header from './Components/Dashboard/Header';


function App() {
  const [active, setActive] = useState(1)
  const [search, setSearch] = useState("")

  return (
    <>
      <Header search={search} setSearch={setSearch} active={active} setActive={setActive} />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div></div>}>
              <Main search={search} setSearch={setSearch} active={active} setActive={setActive}/>
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
        <Route
          path='/videoes/:channelId/:videoId'
          element={
            <Suspense fallback={<div></div>}>
              <Videoes />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
