import "./App.css";
import Cards from "./Components/Cards";
function App() {
  return (
    <div>
      <Cards
        image=" nature"
        title="A random title"
        description="Random description"
      />
      <Cards
        image=" people"
        title="A madeup title"
        description="Madeup description"
      />
      <Cards
        image=" architecture"
        title="A boring title"
        description="Boring description"
      />
    </div>
  );
}

export default App;
