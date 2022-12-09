import './App.scss';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/404';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>

          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
