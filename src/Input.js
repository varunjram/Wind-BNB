export default function Input({ totalguests }) {
  return (
    <div>
      <label>Guests</label>
      <input
        type="text"
        id="textinput"
        value={
          totalguests > 1
            ? totalguests > 0
              ? totalguests + " guests"
              : ""
            : totalguests > 0
            ? totalguests + " guest"
            : ""
        }
      ></input>
    </div>
  );
}
