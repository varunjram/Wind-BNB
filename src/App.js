import logo from "./logo.svg";
import "./App.css";
import Stay from "./StayCard";
import GuestForm from "./GuestForm.js";
import { stays } from "./util";

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
        {console.log("awesome")}
      </div>
    </div>
  );
}

export default App;
