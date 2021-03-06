// Main App.js
import './App.css';
// import Content from './component/Content';
import DropdownMenu from './component/Dropdown';
import Footer from './component/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import NotFoundPage from "./pages/404";
import homepage from "./pages/home";
import about from "./pages/about";
import resume from './pages/resume';
import project1 from './pages/project1';
import project2 from './pages/project2';
import project3 from './pages/project3';
import project4 from './pages/project4';


export default function App() {
  return (
    <Router>
      <DropdownMenu />
      {/* <Content /> */}
      <Switch>
      <Route exact path="/" component={homepage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path="/about" component={about} />
      <Route exact path="/resume" component={resume} />
      <Route exact path="/project1" component={project1} />
      <Route exact path="/project2" component={project2} />
      <Route exact path="/project3" component={project3} />
      <Route exact path="/project4" component={project4} />
      <Redirect to="/404"/>
      </Switch>
      {/*<Footer />*/}
    </Router>
  );
}