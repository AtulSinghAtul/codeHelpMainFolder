import { useState } from "react";

function Card(props) {
  const [rem, setRem] = useState(false);
  const description = props.mappedData.info.slice(0, 200);

  function removeHandler() {
    setRem(!rem);
  }

  return (
    <div className="card">
      <img className="image" src={props.mappedData.image}></img>

      <div className="tour-info">
        <div className="tourDetail">
          <h4 className="tourPrice">{props.mappedData.price}</h4>
          <h4 className="tourName">{props.mappedData.name}</h4>
        </div>
        <div className="description">
          <span>{rem ? props.mappedData.info : description} </span>
          <span className="read-more" onClick={removeHandler}>
            {rem ? " ....Show Less" : "....Read More"}
          </span>
        </div>
      </div>

      <button
        className="btn-red"
        onClick={() => props.notToursInterested(props.mappedData.id)}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;
