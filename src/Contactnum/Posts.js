import React from 'react';
import { Card } from 'react-bootstrap';

const Posts = (props) =>{

    return (
      <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
         <Card.Title>{props.state}</Card.Title>
         <Card.Text>
           Contact Number = {props.number}
            </Card.Text>
        </Card.Body>
    </Card>
      </div>
    );
}

export default Posts;