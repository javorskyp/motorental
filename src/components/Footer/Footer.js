import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

const Footer = (props) => {
  const theme = useContext(ThemeContext);
  
  return (
    <div className={`text-center m-5 text-${theme.color}`}>
      <b>MotoRent 2021</b>
    </div>
  );
}

export default Footer;