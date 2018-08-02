import React from 'react';
import ReactDOM from 'react-dom';
import {
	Card,
	Col,
	Row,
	CardBody,
	CardHeader,
	Form,
	FormGroup,
	Label,
	Button,
	Pagination, 
	PaginationItem, 
	PaginationLink,
	Table,
	Input,
} from 'reactstrap';
import UpdateMenuData from './UpdateMenuData';

class ManageMenuData extends React.Component{
 constructor(props)
 {
  super(props);
  this.state={
    update:false,
  }
 }
 UpdateEntry()
 {
  this.setState({update:true});
 }
	render()
	{
    if(this.state.update) {
      return(
        <UpdateMenuData/>
        )
    }
    else
		return(
			<div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Delete Menu Data
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                  	<th>Element id</th>
                    <th>Menu type</th>
                    <th>Menu tilte</th>
                    <th>Option</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  	<td></td>
                    <td></td>
                    <td></td>
                    <td>
                    <FormGroup>
                      <Input type="button" id="delete" value="Delete" />
                      <br/>
                      <Input type="button" onClick={this.UpdateEntry.bind(this)} id="update" value="Update" />

                    </FormGroup>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>

    );
	}

}
export default ManageMenuData;