import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Form,
	FormGroup,
	Row,
	Col,
	Input,
	Label,
} from 'reactstrap';

class CreateMenuData extends React.Component{
	render()
	{
		return(
			<div className="animated fadeIn">
		<Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Menu Element</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="menu-id">Entity ID</Label>
                      <Input type="select" name="entity-id" id="entity-id">
                       
                      </Input>
                      <Label htmlFor="menu-type">Menu Type</Label>
                      <Input type="select" name="menu-type" id="menu-type">
                       
                      </Input>
                      <Label htmlFor="title">Menu Title</Label>
                      <Input type="text" id="title" placeholder="Enter title" required />
                      
                      <br/>
                      <Input type="submit" id="submit" value="Submit" />
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
export default CreateMenuData;