export default function Input({ totalguests }) {
  return (
    <div>
      <label>Guests : </label>
      <div className="displayGuests">
        {totalguests > 1
          ? totalguests > 0
            ? totalguests + " guests"
            : ""
          : totalguests > 0
          ? totalguests + " guest"
          : ""}
      </div>
    </div>
  );
}
