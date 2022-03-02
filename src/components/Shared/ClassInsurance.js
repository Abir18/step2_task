import React from 'react';
import { Button } from 'react-bootstrap';
import bottomArrow from '../../Images/Group 4258.svg';

const ClassInsurance = () => {
  return (
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
        CLASS OF INSURANCE
      </Button>
      <div style={{ position: 'relative', top: '-50px', left: '1300px' }}>
        <img src={bottomArrow} alt="bottomArrow" />
      </div>
    </div>
  );
};

export default ClassInsurance;
