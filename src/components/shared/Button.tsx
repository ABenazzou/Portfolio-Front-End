// import PropTypes from 'prop-types';
import './styles.css';

interface ButtonProps {
    buttonText: string;
    handleClick: (params: any) => any;
}
const Button = ({ buttonText, handleClick} : ButtonProps) => {
  return (
    <>
      <input type="submit" value={buttonText} onClick={handleClick} className='button'/>
    </>
  )
}
// Button.propTypes = {
//     buttonText: PropTypes.string,
//     buttonFunction: PropTypes.func
// }

export default Button

