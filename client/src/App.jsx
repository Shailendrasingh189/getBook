import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
