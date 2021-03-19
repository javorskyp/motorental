import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';

export default function Footer() {
  const theme = useContext(ThemeContext);
  const date = new Date().getFullYear();
  
  return (
    <><div className={`text-center m-5 text-${theme.color}`}>
      <b> &copy; MotoRent - {date}</b>
    </div>
    </>
);
  };  