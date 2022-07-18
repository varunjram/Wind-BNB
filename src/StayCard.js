export default function Stay({ stay }) {
  const { img, category, rating, title } = stay;
  return (
    <div className="stay-section">
      <img className="img-class" src={img} alt="category-1" />
      <p className="{prop.category}">{category}</p>
      <div className="rating-class">{`${rating}⭐`}</div>
      <h3 className="tittle-class">{title}</h3>
    </div>
  );
}
