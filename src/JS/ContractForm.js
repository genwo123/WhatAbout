import React from 'react';
import '../CSS/ContractForm.css';

function ContractForm() {
  return (
    <div className="contract-container">
      <header className="contract-header">
        <h1>Personal Training Contract</h1>
      </header>
      
      <p>I undersigned understand and agree to the following terms and conditions</p>

      <h3>1. Fees</h3>
      <p>Payment of fees _______ for _______ personal training sessions will be due prior to the beginning of sessions unless payment options are arranged.</p>

      <h3>2. Scheduling</h3>
      <p>Sessions are to be made by appointment only. Appointments can be made in person or by phone but only with assigned trainer.</p>

      <h3>3. Cancellation</h3>
      <p>Cancellations must be made at least 1 hour prior to the training session. Early morning training sessions must be cancelled the evening prior to the session.</p>

      <div className="checkbox-section">
        <div>
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1">I agree to the Fees terms</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2">I agree to the Scheduling terms</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3">I agree to the Cancellation terms</label>
        </div>
      </div>

      <div className="signature-section">
        <div className="signature-block">
          <p>Client Name ____________________</p>
          <p>Date ____________________</p>
        </div>
        <div className="signature-block">
          <p>Trainer Name ____________________</p>
          <p>Date ____________________</p>
        </div>
      </div>
    </div>
  );
}

export default ContractForm;
