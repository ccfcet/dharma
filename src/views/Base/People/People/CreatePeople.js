import React from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,

} from 'reactstrap';

class CreatePeople extends React.Component{
	state= {
		name: '',

	}
	handleChange = event => {
		this.setState({name:event.target.value});
		console.log(this.state);
	}

	render()
	{
	return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>People</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input type="text" id="first-name" name="firstname" onChange={this.handleChange} placeholder="Enter first name" required />
                      <br/>
                      <Label htmlFor="middle-name">Middle Name</Label>
                      <Input type="text" id="middle-name" placeholder="Enter middle name" required />
                      <br/>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input type="text" id="last-name" placeholder="Enter last name" required />
                      <br/>
                    <FormGroup row>
                    <Col md="3">
                      <Label>Gender</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="male" name="male" value="male" />
                        <Label className="form-check-label" check htmlFor="male">Male</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="female" name="female" value="female" />
                        <Label className="form-check-label" check htmlFor="female">Female</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="other" name="other" value="other" />
                        <Label className="form-check-label" check htmlFor="other">Other</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                      <Label htmlFor="date-of-birth">Date Of Birth</Label>
                      <Input type="date" id="date-of-birth" name="date-of-birth" placeholder="date" />
                      <br/>
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input type="select" id="nationality" name="nationality"/>
                      <div>
                      <br/>
                      <Input type="submit" id="submit" value="Submit">
                      </Input>
            
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
	
}
export default CreatePeople;