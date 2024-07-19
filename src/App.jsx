import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting = "Bienvenido a nuestra tienda"/>
    </>
  );
}

export default App