import Placement from "./Enums";
import './styles.css';

interface CardProps {
  title: string;
  thumbnail: string;
  radius: number;
  titlePlacement: Placement;
}

const Card = ({ title, thumbnail, radius, titlePlacement }: CardProps) => {
  return (
    <div className="cardContainer" style={{borderRadius: radius}}>
      {(titlePlacement === Placement.Above) && title}
      <img src={thumbnail} style={{borderRadius: radius}} alt="React Thumbnail" />
      {(titlePlacement === Placement.Below) && title}
    </div>
  );
};

export default Card;
