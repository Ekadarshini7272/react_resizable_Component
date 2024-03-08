import React from 'react';
import { Card } from 'react-bootstrap';
import { Resizable } from 'react-resizable';
import styles from "../styles/styles.css";
import myImage from "../images/img1.png"

const Card1 = () => {
  return (
    <Resizable
    width={300} // Set width
    height={100} // Set height
      minConstraints={[100, 100]} // Set minimum size
      maxConstraints={[500, 500]} // Set maximum size
    >
    <Card className='content-box1'>
      <Card.Body className="text-center">
        <img src={myImage} height={'100'} width={'100'}/>
        <h1>Card1</h1>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
               </Card.Text>
      </Card.Body>
    </Card>
    </Resizable>
  );
}

export default Card1;
