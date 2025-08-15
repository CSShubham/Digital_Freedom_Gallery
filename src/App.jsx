import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Timeline from './components/Timeline';
import TimelineDetails from './components/TimelineDetails';
import Gallary from './components/Gallary';

import { Navigate } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <Routes>
        <Route path='/' element={loading ? <Loading /> : <Home />}/>
        <Route path='/timeline' element={<Timeline/>}>
         <Route index element={<Navigate to="1757" replace />} />
        <Route path='/timeline/:id' element={<TimelineDetails/>}/>
        </Route>
         <Route path='/gallery' element={<Gallary/>}/>
      </Routes>
      {/* <Home /> */}
    </>
  );
};

export default App;