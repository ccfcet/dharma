import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import './UpdateEntity.css';

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

class UpdateEntity extends React.Component {
  // UpdateEntity()
  // {
  //   <UpdateEntity/>
  // }
  render() {
    return (
      <div >
          <Card style={{width:580}} className="main">
              <CardHeader>
                <strong>Entity</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                    <FormGroup>
                      <Label htmlFor="entity-type">Entity name</Label>
                      <Input type="text" id="entity-type" placeholder="Enter entity name" required />
                      <br/>
                      <Label htmlFor="entity-type-slug">Entity Slug</Label>
                      <Input type="text" id="entity-type-slug" placeholder="Enter entity type slug" required />
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

    );
  }
}

export default UpdateEntity;
