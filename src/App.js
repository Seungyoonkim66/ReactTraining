import './App.css';
import Todo from './TodoApp/Todo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sample from './practice/hooks/useMemo';
import ProfileMain from './profile/ProfileMain';
import Header from './static/header';
import Home from './static/home';
import NewApi from './api/newsApi';
import NewsApi from './api/newsApi';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route path={['/', '/home']} exact component={Home} />
      <Route path={'/profile'} component={ProfileMain} />
      <Route path='/todo' exact component={Todo} />
      <Route path='/practice' exact component={Sample} />
      <Route path='/news' exact component={NewsApi} />
      <Route render={({ location }) => <div><h1>404 Not Found</h1> {location.pathname}</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
