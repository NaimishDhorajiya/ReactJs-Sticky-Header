import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../src/footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <Row>
          <Col lg={4}>
            <h4 className="h4-text">Title 1</h4>
            <ul className="footer-item">
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </Col>
          <Col lg={4}>
            <h4 className="h4-text">Title 2</h4>
            <ul>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </Col>
          <Col lg={4}>
            <h4 className="h4-text">Title 3</h4>
            <ul>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </Col>
        </Row>
        <div> {new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default Footer;
