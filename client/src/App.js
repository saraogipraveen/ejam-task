import React from "react";
import DeploymentForm from "./components/DeploymentForm/DeploymentForm";
import DeploymentList from "./components/DeploymentList/DeploymentList";
import { Provider } from "react-redux";
import { Navbar } from 'react-bootstrap';
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">React Deployments</Navbar.Brand>
        </Navbar>
        <DeploymentForm />
        <DeploymentList />
      </div>
    </Provider>
  );
}

export default App;
