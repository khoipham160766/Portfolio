import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './page/Home';
import AboutMe from './page/AboutMe';
import MyProject from './page/MyProject';
import ClothingDetail from './components/Details/ClothingDetail';
import MovieDetail from './components/Details/MovieDetail';
import BookstoreDetail from './components/Details/BookstoreDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='myproject' element={<MyProject />} />
            <Route path='aboutme' element={<AboutMe />} />
            <Route path='myproject/clothingdetail' element={<ClothingDetail />} />
            <Route path='myproject/moviedetail' element={<MovieDetail />} />
            <Route path='myproject/bookstoredetail' element={<BookstoreDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
