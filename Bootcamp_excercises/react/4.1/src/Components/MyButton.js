import "./MyButton.css";

const MyButton = (props) => {
  return <button className={props.style}>{props.name}</button>;
};

export default MyButton;
