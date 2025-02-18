import { Menu } from "./components/asite-menu";
import { ConteudoPrincipal } from "./components/content-principal";

function App() {
  return (
    <div className="flex">
      <Menu />
      <ConteudoPrincipal />
    </div>
  );
}

export default App;
