import { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../context/themeContext';

export default function Footer() {
  const theme = useContext(ThemeContext);
  const [date , setDate] = useState();
  const getYear = () =>  setDate(new Date().getFullYear())
  useEffect(() => {
      getYear();
  }, [])
  
  return (
    <><div className={`text-center m-5 text-${theme.color}`}>
      <b> &copy; MotoRent - {date}</b>
    </div>
    </>
);
  };  