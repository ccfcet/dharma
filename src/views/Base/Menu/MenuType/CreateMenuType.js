import React from 'react';
import {
  Button,
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
  Input,
  InputGroup,
  Label,
  Row,
} from 'reactstrap';

class CreateMenuType extends React.Component{
	render()
	{
		return(
	<div className="animated fadeIn">
		<Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Menu Type</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="entity-id">Entity ID</Label>
                      <Input type="select" name="entity-id" id="entity-id">
                       
                      </Input>
                      <Label htmlFor="menu-type">Menu Type</Label>
                      <Input type="text" id="menu-type" placeholder="Enter type of menu" required />
                      <br/>
                      <Label htmlFor="menu-title">Menu Title</Label>
                      <Input type="text" id="menu-title" placeholder="Enter title of menu" required />
                      <div>
                      <br/>
                      <Input type="submit" id="submit" value="Submit" />
                     
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
			)
	}
}
export default CreateMenuType;