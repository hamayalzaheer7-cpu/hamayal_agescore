
function Button(props) {
  return (
    <button className="btn main-btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
