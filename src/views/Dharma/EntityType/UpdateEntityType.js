import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
// import './UpdateEntity';

import {
  Button,
  ButtonDropdown,
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
} from 'reactstrap';

import './UpdateEntity.css';

class UpdateEntityType extends React.Component {
  // UpdateEntity()
  // {
  //   <UpdateEntity/>
  // }
  render() {
    return (
      <div >
          <Card style={{width:580}} className="main">
              <CardHeader>
                <strong>Entity Type</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="entity-type">Entity Type</Label>
                      <Input type="text" id="entity-type" placeholder="Enter entity type" required />
                      <br/>
                      <Label htmlFor="entity-type-slug">Entity Type Slug</Label>
                      <Input type="text" id="entity-type-slug" placeholder="Enter entity type slug" required />
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

export default UpdateEntityType;
