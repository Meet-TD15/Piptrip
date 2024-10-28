import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanTripPage from './Components/PlanTripPage';

import PipHeader from './Components/header';
import PipFooter from './Components/footer';
import PipHome from './Components/home';
import PipLoginSignup from './Components/loginsignup';
import PipContact from './Components/contact';
import PipServices from './Components/services';
import PipAbout from './Components/about';
import PipReviews from './Components/review';
import PipBlogs from './Components/blogs';
import PipPlan from './Components/plan';


function App() {
  return (
    <Router>
    <div className="App">
      <header id="header">
        <PipHeader />
      </header>
      <main>
        <PipHome />
        <PipAbout />
        <PipReviews />
        <PipPlan />
        <PipBlogs />
        <PipServices />
        <PipLoginSignup />
        <PipContact />
        <Routes>
          <Route path="/plan-trip" element={<PlanTripPage />} />
        </Routes>
      </main>
      <footer id='footer'>
        <PipFooter />
      </footer>
    </div>
  </Router>
  );
}

export default App;
