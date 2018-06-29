import React from 'react';
import './UpdateMenuElement.css';
import {
	Card,
	CardBody,
	Col,
	Label,
	CardHeader,
	FormGroup,
	Row,
	Input,
	Form,
	Button
} from 'reactstrap';

class UpdateMenuElement extends React.Component{
	render()
	{
		return(
		<div >
          <Card style={{width:580}} className="main">
              <CardHeader>
                <strong>Menu Type</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="position">Position</Label>
                      <Input type="text" id="position" placeholder="Enter position" required />
                      <br/>
                      <Label htmlFor="element-name">Element name</Label>
                      <Input type="text" id="element-name" placeholder="Enter menu element" required />
                      <Label htmlFor="element-url">Element url</Label>
                      <Input type="text" id="element-url" placeholder="Enter element url" required />
                      <div>
                      <br/>
                      <Input type="button" id="submit" value="Submit" />
                      <br/>
            
                      <a href="/"><h4>Cancel</h4></a>
                     
                      </div>
                    </FormGroup>
              </CardBody>
            </Card>
      </div>


			)
	}
} 
export default UpdateMenuElement;