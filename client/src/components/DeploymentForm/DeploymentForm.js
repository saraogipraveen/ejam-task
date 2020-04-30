import React, { useState } from "react";
import { addDeployment } from "../../redux/actions/DeploymentAction";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';


const DeploymentForm = () => {
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();

  const initialState = {
    url: "",
    templateName: "",
    version: "",
  };

  const [state, setState] = useState(initialState);

  const onChangeHandler = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addDeployment(state));
    setState(initialState);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <fieldset>
        <legend>Add Deployment</legend>
        <Form.Group>
          <Form.Label htmlFor="url">Url : </Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter valid Url"
            id="url"
            value={state.url}
            onChange={onChangeHandler}
          />
          {errors.url && <span className="error">{errors.url}</span>}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="templateName">Template Name : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Template"
            id="templateName"
            value={state.templateName}
            onChange={onChangeHandler}
          />
          {errors.templateName && (
            <span className="error">{errors.templateName}</span>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="version">
            Version ( Use comma ( , ) to enter multiple versions ) :{" "}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter version(s)"
            id="version"
            value={state.version}
            onChange={onChangeHandler}
          />
          {errors.version && <span className="error">{errors.version}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </fieldset>
    </Form>
  );
};

export default DeploymentForm;
