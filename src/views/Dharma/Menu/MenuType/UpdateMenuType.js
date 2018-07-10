import React from 'react';
import './UpdateMenuType.css';
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

class UpdateMenuType extends React.Component{
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
                      <Label htmlFor="menu-type">Menu Type</Label>
                      <Input type="text" id="menu-type" placeholder="Enter menu type" required />
                      <br/>
                      <Label htmlFor="menu-title">Menu Title</Label>
                      <Input type="text" id="menu-title" placeholder="Enter menu title" required />
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
export default UpdateMenuType;