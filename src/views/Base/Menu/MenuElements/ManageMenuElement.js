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
import UpdateMenuElement from './UpdateMenuElement';

class ManageMenuElement extends React.Component{
	UpdateEntry()
	{
   ReactDOM.render(
    <UpdateMenuElement/>,document.getElementById('root')
  );
	}
	render()
	{
		return(
			<div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Delete Entity Type
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                  	<th>Menu id</th>
                    <th>Element name</th>
                    <th>Element url</th>
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
                      <Input type="button" onClick={this.UpdateEntry} id="update" value="Update" />

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