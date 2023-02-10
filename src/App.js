import React from "react";
import { Route, Routes } from 'react-router-dom';
import SearchBar from './components/Searchbar';
import Home from './components/screens/Home';
import ProductList from './components/screens/Productlist';
import SingleProduct from './components/screens/Singleproduct';
function App() {
  return (
    <div className="App">
      <SearchBar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`/items`} element={<ProductList />} />
          <Route path='/items/:id' element={<SingleProduct />} />
          <Route path='*' element={<h1> Not found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
