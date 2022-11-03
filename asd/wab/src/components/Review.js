import { uuid } from 'uuidv4';
export const Review = (props) => {
const asd = Array.apply(null, Array(5)).map((x,i) => {
    return(
      i <= props.numStar ? <span className="fa fa-star checked"></span> : <span className="fa fa-star"></span>
    )
  });

  return (
    <div className="rot">
      <div className="rot1">{asd}</div>
      <div className="rot2">{props.text}</div>
      <div className="rot3">
        <div className='photoBooth'><img src = '../asd.jpeg'></img></div>
        <p className='name'>{props.name}</p>
      </div>
    </div>
  );
};
