import Placement from "./Enums";
import './styles.css';

interface CardProps {
  title: string;
  thumbnail: string;
  radius: number;
  titlePlacement: Placement;
  height: number;
  width: number;
  minHeight?: number;
}

const Card = ({ title, thumbnail, radius, titlePlacement, height, width, minHeight}: CardProps) => {
  return (
    <div className="cardContainer" style={{borderRadius: radius, maxHeight: height, maxWidth: width, minHeight: minHeight}}>
      {(titlePlacement === Placement.Above) && title}
      <img src={thumbnail} style={{borderRadius: radius}} alt="React Thumbnail" />
      {(titlePlacement === Placement.Below) && title}
    </div>
  );
};


Card.defaultProps = {
  height: 500,
  width: 500
}

export default Card;
