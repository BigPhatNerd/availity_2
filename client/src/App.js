import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import "./App.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Alert from "./components/Alert";
import PresentRegistration from './components/PresentRegistration';
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    participantCellPhone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    npiNumber: "",
    phone: "",
  });
  const [alert, setAlert] = useState([]);
  const [showForm, setShowForm] = useState(false);


  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,

    npiNumber,
  } = formData;
  const handleShowForm = () => setShowForm(!showForm);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({ formData });
  };
  const handlePhone = (e) => {
    setFormData({ ...formData, phone: e });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/users", formData, config);
    
      if (res.data.msg) {
        setAlert([res.data]);
        setTimeout(() => setAlert([]), 5000);

        setFormData({
          userId: "",
          firstName: "",
          lastName: "",
          email: "",
          participantCellPhone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          npiNumber: "",
          phone: "",
        });

      }
      setShowForm(false);
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        setAlert(errors);
        setTimeout(() => setAlert([]), 5000);
      }
    }
  };

  return (
    <div className="App">
      <Alert error={alert} />

      <Container className="pt-3">
      { !showForm ? <PresentRegistration handleShowForm={handleShowForm} /> : <>
        
        <Row className="justify-content-center m-3 p-3">
          <h1>Registration Form</h1>
        </Row>

        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => onChange(e)}
              value={firstName}
              name="firstName"
              type="text"
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => onChange(e)}
              value={lastName}
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => onChange(e)}
              value={email}
              name="email"
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={(e) => onChange(e)}
              value={address}
              name="address"
              type="text"
              placeholder="Enter Address"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={(e) => onChange(e)}
              value={city}
              name="city"
              type="text"
              placeholder="Enter  City"
            />
          </Form.Group>
          <Form.Group controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => onChange(e)}
              value={state}
              name="state"
              type="text"
              placeholder="Enter State"
            >
              <option value="">N/A</option>
              <option value="AK">Alaska</option>
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DC">District of Columbia</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="IA">Iowa</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="MA">Massachusetts</option>
              <option value="MD">Maryland</option>
              <option value="ME">Maine</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MO">Missouri</option>
              <option value="MS">Mississippi</option>
              <option value="MT">Montana</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="NE">Nebraska</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NV">Nevada</option>
              <option value="NY">New York</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="VT">Vermont</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
              <option value="WV">West Virginia</option>
              <option value="WY">Wyoming</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onWheel={(e) => e.target.blur()}
              onChange={(e) => onChange(e)}
              value={zip}
              name="zip"
              type="number"
              placeholder="Enter Zip"
            />
          </Form.Group>

          <Row className="text-left">
            <Col>
              <Form.Group controlId="formBasicNpiNumber">
                <Form.Label>NPI Number</Form.Label>
                <Form.Control
                  onWheel={(e) => e.target.blur()}
                  onChange={(e) => onChange(e)}
                  value={npiNumber}
                  name="npiNumber"
                  type="number"
                  placeholder="Enter NPI Number"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>

                <PhoneInput
                  country="us"
                  onChange={(e) => handlePhone(e)}
                  value={phone}
                  name="phone"
                  type="phone"
                  placeholder="Enter Phone"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </>
      }
      </Container>
    </div>
  );
}

export default App;
