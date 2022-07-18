import { useState } from "react";
import Counter from "./Counter.js";
import Input from "./Input.js";
import "./App.css";

export default function GuestForm() {
  const [adlutcount, setAdlutCount] = useState(0);
  const [childCount, setchildCount] = useState(0);
  const guestdata = [
    {
      catagory: "Adult",
      description: "Age 13 or above",
    },
    {
      catagory: "Children",
      description: "Age 2-12",
    },
  ];

  return (
    <div className="GuestForm">
      <Input totalguests={adlutcount + childCount} />

      <Counter
        guestdata={guestdata[0]}
        count={adlutcount}
        setCount={setAdlutCount}
      />
      <Counter
        guestdata={guestdata[1]}
        count={childCount}
        setCount={setchildCount}
      />
    </div>
  );
}
