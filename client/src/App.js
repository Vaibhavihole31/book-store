import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import AddBook from './components/AddBook/AddBook';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">BookStore📚</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addbook">AddBook</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
