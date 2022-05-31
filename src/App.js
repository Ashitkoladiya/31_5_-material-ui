import logo from './logo.svg';
import './App.css';
import Layout from './componets/Layout/Layout';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Medicine from './container/Medicine';
import Doctors from './container/Doctors';
import Form from './componets/Form';

function App() {
  return (
    <>
    <Layout>
      <Switch>
        <Route exact path={"/Medicine"} component={Medicine}></Route>
        <Route exact path={"/Doctors"} component={Doctors}></Route>
        <Route exact path={"/Btn"} component={Form}></Route>
      </Switch>

    </Layout>
    
    
    </>
  );
}

export default App;
