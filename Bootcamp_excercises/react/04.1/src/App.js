import "./App.css";
import MyButton from "./Components/MyButton";
function App() {
  return (
    <div>
      <MyButton style="bold" name="Important" />
      <MyButton name="Not important" />
    </div>
  );
}

export default App;
