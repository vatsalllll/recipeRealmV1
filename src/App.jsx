import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-blue-500 text-white py-4 shadow-md">
          <h1 className="text-center text-2xl font-bold">RecipeRealm</h1>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-gray-300 py-2 text-center">
          <p>&copy; {new Date().getFullYear()} RecipeRealm. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
