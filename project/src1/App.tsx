import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Event from './pages/Event'; 
import Theme from './pages/Theme';
import Login from './pages/Login';
import Service from './pages/Service';
import SignUp from './pages/SignUp';
import { AuthProvider } from './providers/AuthProvider';



// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar isLoggedIn={isLoggedIn} />
//       <main className="flex-grow pt-16">
//         <Home />
//       </main>
//       <Footer />
//     </div>
//   );
// }


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider children={undefined}>
    <Router> {/* ✅ Wrap in Router */}
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex-grow pt-16">
          
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/event" element={<Event />} /> 
            <Route path="/theme" element={<Theme />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;