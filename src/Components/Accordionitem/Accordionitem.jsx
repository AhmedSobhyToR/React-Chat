import React from 'react';
import './Accordionitem.css'
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sharedphoto from '../Sharedphoto/Sharedphoto';
const Accordionitem = () => {
    return (
        <Accordion className='accordion'>
        <Accordion.Item eventKey="0" className='accordion-item'>
          <Accordion.Header className='accordion-header'>
            <p>Chat Settings</p>
            <div>
            <img src="../../../assests/arrowDown.png" alt="" />
            </div>
          </Accordion.Header>
          <Accordion.Body className='accordion-body'>
            This is the content of the first accordion item. You can add any content you like here.
          </Accordion.Body>
        </Accordion.Item >
        <Accordion.Item eventKey="1" className='accordion-item'>
          <Accordion.Header className='accordion-header'>

          <p>Privacy & Help</p>
            <div>
            <img src="../../../assests/arrowDown.png" alt="" />
            </div>
          </Accordion.Header>
          <Accordion.Body className='accordion-body'>
            This is the content of the second accordion item. You can add any content you like here.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className='accordion-item'>
          <Accordion.Header className='accordion-header'>

            
          <p>Shared photos</p>
            <div>
            <img src="../../../assests/arrowDown.png" alt="" />
            </div>
          </Accordion.Header>
          <Accordion.Body className='accordion-body'>
            <div className='shared-photos'>
          <Sharedphoto></Sharedphoto>
          <Sharedphoto></Sharedphoto>
          <Sharedphoto></Sharedphoto>
          <Sharedphoto></Sharedphoto>
          <Sharedphoto></Sharedphoto>


            </div>
          

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className='accordion-item'>
          <Accordion.Header className='accordion-header'>

          <p>Shared files</p>
            <div>
            <img src="../../../assests/arrowDown.png" alt="" />
            </div>
          </Accordion.Header>
          <Accordion.Body className='accordion-body'>
            This is the content of the third accordion item. You can add any content you like here.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
}

export default Accordionitem;
