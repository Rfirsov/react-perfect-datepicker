import DatePicker from '../components/DatePicker';
import MainPageProvider from '../store/MainPageProvider';
import InputDate from '../components/InputDate';

const MainPage = () => {
  return (
    <MainPageProvider>
      <main className="main">
        <InputDate />
        <DatePicker />
      </main>
    </MainPageProvider>
  );
};

export default MainPage;
