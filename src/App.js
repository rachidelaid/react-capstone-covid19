import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './views/Home';
import Region from './views/Region';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:id" element={<Region />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
