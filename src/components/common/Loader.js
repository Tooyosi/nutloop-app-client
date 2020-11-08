import React from "react";
import { Container, Row, Spinner } from "reactstrap";

export const Loader = (props) => (
  <Container fluid className={`${props.className} d-flex`}>
    <Row className="justify-content-center align-self-center w-100 text-center">
      <Spinner color="primary"/>
    </Row>
  </Container>
);

export default Loader;
