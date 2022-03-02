import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Group from '../../Images/Group 4261.svg';

const FormSubmit = () => {
  let history = useHistory();
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '704px',
        }}
      >
        <div>
          <img
            src={Group}
            alt="Group4261"
            className="d-flex justify-content-center align-items-center"
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '-160px',
          //   height: '704px',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              fontFamily: 'Inter',
            }}
          >
            Form Submitted Successfully
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            <br /> dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Button
            onClick={() => {
              history.push('/');
            }}
            style={{
              background: '#1E6FB0',
              borderRadius: '30px',
              border: 'none',
              cursor: 'auto',
            }}
          >
            Button default
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
