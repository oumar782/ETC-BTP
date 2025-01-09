import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Accueil from './composant/Accueil.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/homes" />} />
          <Route path="/homes" element={<Accueil />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;