import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/myComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/nav';
import Home from './example/home';
import ListUser from './Users/listUser';
import DetailUser from './Users/detailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/**
 * 2 components: class component / function component (function, arrow)
 * 
 */

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/todos" exact>
              <ListTodo></ListTodo>
            </Route>
            <Route path="/about" exact>
              <MyComponent></MyComponent>
            </Route>
            <Route path="/user" exact>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id" exact>
              <DetailUser></DetailUser>
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
