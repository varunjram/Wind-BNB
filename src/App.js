import "./App.css";
import Stay from "./stayCard";
import GuestForm from "./guestForm.js";
import { stays } from "./util.js";

function App() {
  return (
    <div className="App">
      <div className="contain">
        <h1>Stays</h1>
        <GuestForm />

        <div className="maindiv">
          {stays.map((object, index) => (
            <Stay key={index} stay={object} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
