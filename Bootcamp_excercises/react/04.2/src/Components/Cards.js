import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="wrapper">
      <div className={props.image}></div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <a className="share">SHARE</a>
      <a className="explore">EXPLORE</a>
    </div>
  );
};

export default Cards;
