export default function Counter({ guestdata, count, setCount }) {
  const decrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <p className="guestCatagory">{guestdata.catagory}</p>
      <div className="guestCatagoryDiscription">{guestdata.description}</div>
      <div>
        <button className="countbtn" onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button
          className="countbtn"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
