import { Alert, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

type messageType = string | Error | null;

type NewsLetterParams = {
  onValidated: (a: any) => void
  status: "success" | "sending" | "error" | null;
  message: messageType;
};

const typeChecking = (msg: messageType) => {
  if (msg instanceof Error) {
    return msg.toString();
  } else {
    return msg;
  }
};

const NewsLetter = ({ onValidated, status, message }: NewsLetterParams) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    email &&
    email.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email
    });
  };

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className='newsletter-bx'>
        <Row>
          <Col
            lg={12}
            md={6}
            xl={5}
          >
            <h3>Subscribe To Our Newsletter</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant='danger'>{typeChecking(message)}</Alert>}
            {status === 'success' && <Alert variant='success'>{typeChecking(message)}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <textarea
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
