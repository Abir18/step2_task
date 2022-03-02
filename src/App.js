import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form1 from './components/Form1/Form1';
import Form2 from './components/Form2/Form2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormSubmit from './components/FormSubmit/FormSubmit';

function App() {
  return (
    <div className="App">
      {/* <Form1 /> */}
      {/* <FormSubmit /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Form2 />
          </Route>
          <Route exact path="/form1">
            <Form1 />
          </Route>
          <Route exact path="/form-submit">
            <FormSubmit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
