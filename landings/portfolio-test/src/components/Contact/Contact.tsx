import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import './Contact.css';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({ message: '', success: false });

  const onFormUpdate = (toChange: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [toChange]: value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText('Sending...');

    await fetch('http://localhost:3000/contact', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    }).then(() => {
      console.log('Just `then` Status');
    }).catch(() => {
      setStatus({ success: false, message: "Something Went Wrong" })
    }).finally(() => {
      if (formDetails.message.length > 0) {
        setStatus({ success: true, message: "Message Has Sent" });
      } else {
        setStatus({success: false, message: "Write Down Something" })
      }
    });

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className='contact' id="connect">
      <Container className="contact-container">
        <Row className="align-items-center el_position">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    placeholder="First Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    placeholder="Last Name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phoneNumber}
                    onChange={(e) => onFormUpdate('phoneNumber', e.target.value)}
                    placeholder="Phone Number"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    placeholder="Email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea
                    rows={6}
                    className="contact_msg-area"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">{buttonText}</button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
