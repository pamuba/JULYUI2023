// import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksContainer from './components/HooksContainer';
import PhoneContainer from './components/PhoneContainer';
import LaptopContainer from './components/LaptopContainer';

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
      <header className="App-header">
         <LaptopContainer/>
         <HooksContainer></HooksContainer>
         <PhoneContainer></PhoneContainer>
      </header>
      </div>
    // </Provider>
  );
}

export default App;
