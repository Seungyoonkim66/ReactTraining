import './App.css';
import Todo from './TodoApp/Todo';
import { BrowserRouter, Route } from 'react-router-dom';
import Sample from './practice/hooks/useMemo';
import ProfileMain from './profile/ProfileMain';
import Profile from './profile/Profile';
import Header from './static/header';
import Home from './static/home';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Route path={['/', '/home']} exact component={Home} />
      <Route path={'/profile'} exact component={ProfileMain} />
      <Route path='/todo' exact component={Todo} />
      <Route path='/practice' exact component={Sample} />
      <Route path='/profile/:username' component={Profile}/>

    </BrowserRouter>
  );
}

export default App;
