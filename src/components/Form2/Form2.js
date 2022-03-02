import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import Header from '../Header/Header';
import downArrow from '../../Images/expand_more_black_24dp.svg';
import upArrow from '../../Images/Group 4257.svg';
import bottomArrow from '../../Images/Group 4258.svg';
import calendar from '../../Images/date_range_black_24dp.svg';
import ClassInsurance from '../Shared/ClassInsurance';
import PeriodInsurance from '../Shared/PeriodInsurance';
import MaidDetails from '../Shared/MaidDetails';
import FormLayout from '../Shared/FormLayout';
import FormSubmit from '../FormSubmit/FormSubmit';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: '25px', fontWeight: 'bold' }}
        >
          Are You Sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want you clear all data? This action cannot be <br />
          Un-Done
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{
            background: '#1E6FB0',
            borderRadius: '30px',
            border: 'none',
            cursor: 'auto',
          }}
        >
          Clear
        </Button>
        <Button
          onClick={props.onHide}
          style={{
            background: '#fff',
            color: '#1E6FB0',
            border: 'none',
            cursor: 'auto',
            fontWeight: 'bold',
            marginLeft: '25px',
          }}
        >
          Go Back
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Form2 = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const location = useLocation();
  let history = useHistory();
  //   const redirect_uri = location.state?.from || '/';
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted');
  };
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Class Of Insurance
            </Form.Label>
            <Form.Control placeholder="Select Class Of Insurance" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={downArrow} alt="downArrow" />
            </div>
          </Form.Group>
          <PeriodInsurance />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Period Of Insurance: From
            </Form.Label>
            <Form.Control placeholder="Select Period Of Insurance: From" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={calendar} alt="calendar" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Period Of Insurance: To
            </Form.Label>
            <Form.Control placeholder="Select Period Of Insurance: To" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={calendar} alt="calendar" />
            </div>
          </Form.Group>
          <MaidDetails />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Name
            </Form.Label>
            <Form.Control placeholder="Enter Maid Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Passport No.
            </Form.Label>
            <Form.Control placeholder="Enter Maid Passport No." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Date Of Birth
            </Form.Label>
            <Form.Control placeholder="Select Your Date Of Birth" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={calendar} alt="calendar" />
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Nationality
            </Form.Label>
            <Form.Control placeholder="Select Maid Nationality" />
            <div style={{ position: 'relative', top: '-33px', left: '1250px' }}>
              <img src={downArrow} alt="downArrow" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Work Permit No.
            </Form.Label>
            <Form.Control placeholder="Enter Maid Work Permit No." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Transmission No.
            </Form.Label>
            <Form.Control placeholder="Enter Maid Transmission No." />
          </Form.Group>
          <div className="mb-5">
            <Button
              onClick={() => {
                history.push('/form-submit');
              }}
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

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <Button
              onClick={() => setModalShow(true)}
              style={{
                background: '#fff',
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

export default Form2;
