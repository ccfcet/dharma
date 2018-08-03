import React from 'react';
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

class UpdateEventInformationSlug extends React.Component{
	render()
	{
		return(
		<div >
          <Card style={{width:580}} className="main">
              <CardHeader>
                <strong>Event Slug</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="slug-name">Slug Name</Label>
                      <Input type="text" id="slug-name" placeholder="Enter slug name" required />
                      <div>
                      <br/>
                      <Input type="button" id="submit" value="Submit" />
                      <br/>
            
                      <a href="#/dashboard"><h4>Cancel</h4></a>
                     
                      </div>
                    </FormGroup>
              </CardBody>
            </Card>
      </div>


			);
	}
} 
export default UpdateEventInformationSlug;