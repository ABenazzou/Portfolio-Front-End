interface HobbyProps {
  hobbyName: string;
  hobbyLogo: string;
  hobbyDescription: string;
}
const Hobby = ({ hobbyName, hobbyLogo, hobbyDescription }: HobbyProps) => {
  return (
    <div className="hobbyContainer">
      <div className="hobbyName"> {hobbyName} </div>
      <div className="hobbyLogo">
        <img src={hobbyLogo} alt="Basketball Logo" />
      </div>
      <div className="hobbyDescription"> {hobbyDescription} </div>
    </div>
  );
};

export default Hobby;
