import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import { fetchCountries } from './redux/countries';
import Home from './views/Home';
import Region from './views/Region';
import Country from './views/Country';
import Spinner from './components/Spinner';

const App = () => {
  const countries = useSelector(({ countriesReducer }) => countriesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <div className="App">
      {!countries.length ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/region/:id" element={<Region />} />
            <Route path="/country/:id" element={<Country />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
