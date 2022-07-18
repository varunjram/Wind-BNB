export default function Stay(props) {
  return (
    <div className="stay-section">
      <img className="img-class" src={props.stay.img} alt="category-1" />
      <p className="{prop.category}">{props.stay.category}</p>
      <div className="rating-class">{`${props.stay.rating}⭐`}</div>
      <h3 className="tittle-class">{props.stay.title}</h3>
    </div>
  );
}
