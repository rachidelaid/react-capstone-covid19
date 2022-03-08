import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import { fetchCountries } from './redux/countries';
import Home from './views/Home';
import Region from './views/Region';
import Country from './views/Country';
import Spinner from './components/Spinner';
import { fetchCovid } from './redux/covid';

const App = () => {
  const countries = useSelector(({ countriesReducer }) => countriesReducer);
  const covid = useSelector(({ covidReducer }) => covidReducer);
  const dispatch = useDispatch();

  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`}`;

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }

    if (!covid.total) {
      dispatch(fetchCovid(today));
    }
  }, []);

  return (
    <div className="App">
      {!countries.length && !covid.total ? (
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
