import { Nav } from "./components/ui/Nav";
import "./App.scss";
import { InicioScreen } from "./components/InicioScreen";
import { Footer } from "./components/ui/Footer";
function App() {
  return (
    <>
      <Nav />
      <InicioScreen />
      <Footer />
    </>
  );
}

export default App;
