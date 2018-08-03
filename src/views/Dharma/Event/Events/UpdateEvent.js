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

class UpdateEvent extends React.Component{
	render()
	{
		return(
		<div >
          <Card style={{width:580}} className="main">
              <CardHeader>
                <strong>Event</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="event-name">Event name</Label>
                      <Input type="text" id="event-name" placeholder="Enter event name" required />
                      <br/>

                      <Input type="button" id="submit" value="Submit" />
                      <br/>
            
                      <a href="#/dashboard"><h4>Cancel</h4></a>
                     
                    </FormGroup>
              </CardBody>
            </Card>
      </div>


			)
	}
} 
export default UpdateEvent;