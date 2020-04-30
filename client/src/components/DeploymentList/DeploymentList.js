import React, { useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import {
  getDeployments,
  removeDeployment,
} from "../../redux/actions/DeploymentAction";
import { Accordion, Card, Button } from "react-bootstrap";

const DeploymentList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeployments());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(removeDeployment(id));
  };

  const deployments = useSelector(state => state.deployment.deployments);

  return (
    <div>
      <fieldset>
        <legend>Deployment List</legend>
        {!deployments.length && (
          <h5 className="error">No deployments yet ...</h5>
        )}
        {deployments.map((deployment, index) => {
          return (
            <Accordion defaultActiveKey={index} key={deployment._id}>
              <Card style={{margin : 10}}>
                <Accordion.Toggle as={Card.Header} eventKey={index}>
                  <Button
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: ".55rem",
                      padding: ".15rem .40rem",
                    }}
                    variant="danger"
                    onClick={() => onDeleteHandler(deployment._id)}
                  >
                    Delete
                  </Button>
                  {deployment.templateName}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <span style={{ display: "block" }} key={index}>
                      URL : <a href={deployment.url} target="_blank">{deployment.url}</a>
                    </span>
                    {deployment.version.map((version, index) => (
                      <span style={{ display: "block" }} key={index}>
                        version : {version}{" "}
                      </span>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
      </fieldset>
    </div>
  );
};

export default DeploymentList;
