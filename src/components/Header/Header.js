import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../Images/Image 38.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={6} style={{ textAlign: 'start' }}>
            <img src={logo} alt="" />
          </Col>
          <Col
            md={6}
            style={{
              textAlign: 'start',
              fontSize: '14px',
              color: '#1D1D1D',
              opacity: '1',
            }}
          >
            <h2
              style={{
                color: '#0076BE',
                fontSize: '24px',
                fontWeight: 'bold',
                opacity: '1',
              }}
            >
              AWG INSURANCE BROKERS PTE LTD
            </h2>
            <p>
              BUSINESS REGISTRATION NO: 199002234G GST NO: 199002234G
              <br /> 240 Macpherson Road #08-01, Pines Building, Singapore
              348574
              <br /> Tel: 65 6294 6688 / Fax: 65 6282 6188 / Email:
              awg@awginsurance.com
            </p>
          </Col>
        </Row>
      </Container>
      <hr className="mb-5 mx-auto w-75" />
    </div>
  );
};

export default Header;
