export const Review = (props) => {
  let asd;
  switch (props.numStar) {
    case 0:
      asd = (
        <div>
          {" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>
        </div>
      );
      break;
    case 1:
      asd = (
        <div>
          {" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>
        </div>
      );
      break;
    case 2:
      asd = (
        <div>
          {" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>
        </div>
      );
      break;
    case 3:
      asd = (
        <div>
          {" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star"></span>{" "}
          <span className="fa fa-star"></span>
        </div>
      );
      break;
    case 4:
      asd = (
        <div>
          {" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star"></span>
        </div>
      );
      break;
    case 5:
      asd = (
        <div>
          {" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>{" "}
          <span className="fa fa-star checked"></span>
        </div>
      );
  }
  new Array(5).map((x) => {
    console.log("asd");
  });

  return (
    <div className="rot">
      <div className="rot1">{asd}</div>
      <div className="rot2">{props.text}</div>
    </div>
  );
};
