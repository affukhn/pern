import React from 'react';
// import { Switch, Route, Routes } from "react-router-dom"
import RestaurantsDetails from './routes/RestaurantsDetails';
import Home from './routes/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <div className='Container'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/RestaurantsDetails/:id' element={<RestaurantsDetails />} />
                <Route path='/RestaurantsDetails/:id/update' element={<RestaurantsDetails />} />
            </Routes>
        </BrowserRouter >
        </div>
    )
};

export default App;