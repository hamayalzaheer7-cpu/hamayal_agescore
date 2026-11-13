
function Card(props) {
  return (
    <div className="card custom-card h-100">

      {props.image && (
        <img src={props.image} className="card-img-top" alt={props.title} />
      )}

      <div className="card-body">

        {props.icon && <h3>{props.icon}</h3>}

        <small className="text-primary">{props.label}</small>

        <h5 className="card-title mt-2">{props.title}</h5>

        <p className="card-text">{props.description}</p>

        {props.buttonText && (
          <a href={props.link || "#contact"} className="card-link">
            {props.buttonText} 
          </a>
        )}

      </div>
    </div>
  );
}

export default Card;
