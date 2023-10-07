import NavLink from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Body from "./Components/Pages/Body";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavLink />
      <Home />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
