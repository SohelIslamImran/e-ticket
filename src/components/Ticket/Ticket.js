import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Ticket = (props) => {
    const { ticketType, cost, image } = props.ticket;
    const { setTicket } = useContext(UserContext);

    return (
        <Col className="d-flex justify-content-center">
            <Card bg="transparent" text="white" className="border-0 mb-4" style={{ width: '15.4rem' }}>
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Body className="py-0 px-2" style={{ height: '73%' }}>
                        <Card.Title as={'h1'} style={{ fontWeight: 'bold' }}>{ticketType}</Card.Title>
                        <Button
                            className="border-0 px-4 py-2 mt-3 shadow"
                            style={{
                                background: 'linear-gradient(106.5deg, #FF8933 2.27%, #FFBE16 112.29%)',
                                borderRadius: '57px'
                            }}
                            as={Link} to="/destination"
                            onClick={() => setTicket(cost)}
                            size="lg">Buy Now</Button>
                    </Card.Body>
                    <Card.Text className="text-center mt-3" style={{ height: '22%', fontSize: '3.7rem', fontWeight: 'bold' }} as={'h1'}>&#2547;{cost}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Ticket;