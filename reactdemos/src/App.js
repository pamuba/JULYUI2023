import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Count from './components/Count';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetrings from './components/UserGreetrings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import PureComp from './components/PureComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Greet></Greet>
       <Welcome></Welcome> */}
       {/* <Hello></Hello> */}
       {/* <Greet name="Bruce" heroName="Batman">
         <p>This a children prop</p>
         <button>CLICK</button>
       </Greet>
       <Greet name="Clark" heroName="Superman"></Greet>
       <Greet name="Diana" heroName="Wonder Women"></Greet> */}

      {/* <Welcome name="Bruce" heroName="Batman">
         <p>This a children prop</p>
         <button>CLICK</button>
       </Welcome>
       <Welcome name="Clark" heroName="Superman"></Welcome>
       <Welcome name="Diana" heroName="Wonder Women"></Welcome> */}


       {/* <Message></Message> */}

       {/* <Count></Count> */}
       {/* <EventBind></EventBind> */}
       {/* <ParentComponent></ParentComponent> */}
       {/* <UserGreetrings></UserGreetrings> */}
       {/* <NameList></NameList> */}
       {/* <Stylesheet primary={true}></Stylesheet> */}
       {/* <Form></Form> */}
      {/* <ErrorBoundary>
       <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
       <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
       <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}

      <PureComp></PureComp>
      </header>
    </div>
  );
}

export default App;
