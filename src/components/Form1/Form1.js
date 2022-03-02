import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import downArrow from '../../Images/expand_more_black_24dp.svg';
import upArrow from '../../Images/Group 4257.svg';
import bottomArrow from '../../Images/Group 4258.svg';
import calendar from '../../Images/date_range_black_24dp.svg';
import ClassInsurance from '../Shared/ClassInsurance';
import PeriodInsurance from '../Shared/PeriodInsurance';
import MaidDetails from '../Shared/MaidDetails';
import FormLayout from '../Shared/FormLayout';

const Form1 = () => {
  return (
    <div>
      <Header />
      <Container>
        <FormLayout />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Inquiry Type
            </Form.Label>
            <Form.Control placeholder="Select Inquiry Type" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={downArrow} alt="downArrow" />
            </div>
          </Form.Group>
          <div
            className="d-grid gap-2 "
            style={{
              width: '105%',
              marginLeft: '-30px',
            }}
          >
            <Button
              size="lg"
              style={{
                textAlign: 'start',
                fontSize: '18px',
                fontWeight: 'bold',
                background: '#035485',
                border: 'none',
                borderRadius: '0px',
                cursor: 'initial',
              }}
            >
              INSURED PARTICULARS
            </Button>
            <div style={{ position: 'relative', top: '-50px', left: '1300px' }}>
              <img src={upArrow} alt="upArrow" />
            </div>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Insured Name
            </Form.Label>
            <Form.Control placeholder="Enter Insured Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              NRIC
            </Form.Label>
            <Form.Control placeholder="Enter Insured NRIC" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Email Address
            </Form.Label>
            <Form.Control placeholder="Enter Insured Email Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Contact No.
            </Form.Label>
            <Form.Control placeholder="Enter Insured Contact No." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Date Of Birth
            </Form.Label>
            <Form.Control placeholder="Select Insured Date Of Birth" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={calendar} alt="calendar" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Address
            </Form.Label>
            <Form.Control placeholder="Enter Insured Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Occupation
            </Form.Label>
            <Form.Control placeholder="Enter Insured Occupation" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Gendar
            </Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                id="radio-female"
                name="group1"
                label="Male"
              />
              <Form.Check
                inline
                type="radio"
                id="radio-male"
                name="group1"
                label="Female"
              />
            </div>
          </Form.Group>

          <ClassInsurance />
          <PeriodInsurance />
          <MaidDetails />
          <div className="mb-5">
            <Button
              type="submit"
              style={{
                background: '#B4B4B4',
                borderRadius: '30px',
                border: 'none',
                cursor: 'auto',
              }}
            >
              Submit
            </Button>
            <Button
              style={{
                background: '#fff',
                //   borderRadius: '30px',
                color: '#1E6FB0',
                border: 'none',
                cursor: 'auto',
                fontWeight: 'bold',
                marginLeft: '25px',
              }}
            >
              Clear All
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Form1;
