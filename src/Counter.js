export default function Counter({ guestdata, count, setCount }) {
  const { catagory, description } = guestdata;

  return (
    <div>
      <p className="guestCatagory">{catagory}</p>
      <div className="guestCatagoryDiscription">{description}</div>
      <div>
        <button
          className="countbtn"
          onClick={() => {
            if (count > 0) setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="countbtn"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
