import { ReactNode } from 'react';
import useSelectedTime from '../hooks/useSelectedTime';
import MainPageContext from './MainPageContext';

interface MainPageProviderProps {
  children: ReactNode;
}

const MainPageProvider = ({ children }: MainPageProviderProps) => {
  const { selectedTime, setSelectedTime } = useSelectedTime();

  return <MainPageContext.Provider value={{ selectedTime, setSelectedTime }}>{children}</MainPageContext.Provider>;
};

export default MainPageProvider;
