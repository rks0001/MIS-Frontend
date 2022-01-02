import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


function Sectioneven(props) {
    return (
        <section className="sctn_odd">

                <Container >
                <Row className="sec">
                <Col>
                        <img className="tnp2" src={props.image} alt="tnp1" width="280" height="240"/>
                    </Col>
                <Col>
                    <div className="tnpcontainer">
                        <div className="icon"><img src={props.icon} alt="icon" width="50" height="50" /></div>
                        <h4 className="a1">{props.title}</h4>
                        <h4 className="a2">
                           {props.description}
                        
                        </h4>                        

                    </div>
                    </Col>
                    
            </Row>
            </Container>
        </section>
    )
}


export default Sectioneven