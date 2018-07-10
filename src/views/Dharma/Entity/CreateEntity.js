import React from 'react'

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

class CreateEntity extends React.Component{
	render()
	{
		return(
	<div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Entity</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="entity-type">Entity Type</Label>
                      <Input type="select" name="entity-type" id="entity-type">
                       
                      </Input>
                      <Label htmlFor="entity-name">Entity Name</Label>
                      <Input type="text" id="entity-name" placeholder="Enter entity name" required />
                      <br/>
                      <Label htmlFor="entity-slug">Entity Slug</Label>
                      <Input type="text" id="entity-slug" placeholder="Enter entity slug" required />
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
			);
	}
}
export default CreateEntity;