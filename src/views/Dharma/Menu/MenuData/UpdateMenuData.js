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

class UpdateMenuData extends React.Component{
	render()
	{
		return(
		<div >
          <Card style={{width:580}} className="main">
              <CardHeader>
                <strong>Menu Data</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="entity-id">Entity Id</Label>
                      <Input type="select" id="entity-id" placeholder="Enter entity id" required />
                      <Label htmlFor="menu-type">Menu type</Label>
                      <Input type="select" id="menu-type" placeholder="Enter menu type" required />
                      <Label htmlFor="title">Title</Label>
                      <Input type="text" id="title" placeholder="Enter menu title" required />

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
export default UpdateMenuData;