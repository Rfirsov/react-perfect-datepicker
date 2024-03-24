import { Dispatch, SetStateAction, createContext } from 'react';

interface IMainContextProvider {
  selectedTime: Date;
  setSelectedTime: Dispatch<SetStateAction<Date>>;
}

const MainPageContext = createContext({} as IMainContextProvider);

export default MainPageContext;
