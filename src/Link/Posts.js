import React from 'react';
import { Card } from 'react-bootstrap';
const Posts = (props) =>{

    return (
      <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
         <Card.Title>{props.title}</Card.Title>
         <Card.Text>
           Link = {props.link}
            </Card.Text>
        </Card.Body>
    </Card>
      </div>
    );
}
export default Posts;