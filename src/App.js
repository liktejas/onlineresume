import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <>
      <BrowserRouter basename="/onlineresume">
        <Switch>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/" component={About}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
