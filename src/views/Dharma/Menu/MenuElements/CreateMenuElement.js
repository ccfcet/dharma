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

class CreateMenuElement extends React.Component{
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
                      <Label htmlFor="menu-id">Menu ID</Label>
                      <Input type="select" name="menu-id" id="menu-id">
                       
                      </Input>
                      <Label htmlFor="position">Position</Label>
                      <Input type="text" id="position" placeholder="Enter position" required />
                      <br/>
                      <Label htmlFor="item-name">Menu Item</Label>
                      <Input type="text" id="item-name" placeholder="Enter menu item" required />
                      <Label htmlFor="item-url">Item url</Label>
                      <Input type="text" id="item-url" placeholder="Enter item url" required />
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
export default CreateMenuElement;