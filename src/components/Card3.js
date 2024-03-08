import React from 'react';
import { Card } from 'react-bootstrap';
import { Resizable } from 'react-resizable';

const Card3 = () => {
  return (
    <Resizable
    width={300} // Set width
    height={100} // Set height
      minConstraints={[100, 100]} // Set minimum size
      maxConstraints={[500, 500]} // Set maximum size
    >
    <Card className='content-box3'>
      <Card.Body>
        <h1>Card3</h1>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
      </Card.Body>
    </Card>
    </Resizable>
  );
}

export default Card3;
