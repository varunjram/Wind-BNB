import { useState } from "react";
import Counter from "./counter.js";
import Input from "./Input.js";
import { guestdata } from "./util.js";

export default function GuestForm() {
  const [adlutcount, setAdlutCount] = useState(0);
  const [childCount, setchildCount] = useState(0);

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
