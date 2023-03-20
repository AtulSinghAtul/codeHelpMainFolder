import Card from "./Card";

function Tours(props) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Love</h2>
      </div>
      <div className="cards">
        {props.toursData.map((mappedData) => {
          return (
            <Card
              key={mappedData.id}
              mappedData={mappedData}
              notToursInterested={props.notInterested}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
