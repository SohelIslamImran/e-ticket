import React, { useContext } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';

const SearchResult = () => {
    const {ticket, search, setSearch} = useContext(UserContext);

    return (
        <Card className="mt-5" style={{ background: "#EFEFEF", borderRadius: "10px" }}>
            <Row className="m-3">
                <Col className="bg-primary text-white" style={{ borderRadius: "10px" }}>
                    <Card.Body className="p-2">
                        <Card.Title style={{ fontSize: "1.5rem" }}>
                            <i style={{ fontSize: "1.4rem" }} className="bi bi-geo-alt-fill mr-4"></i>
                            {search.pickFrom}
                        </Card.Title>
                        <Card.Title style={{ fontSize: "1.5rem" }}>
                            <i style={{ fontSize: "1.4rem" }} className="bi bi-geo-alt-fill mr-4"></i>
                            {search.pickTo}
                        </Card.Title>
                    </Card.Body>
                </Col>
            </Row>
            <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                <Col md="3" xs="4" className="d-flex justify-content-center align-content-center py-3">
                    <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                </Col>
                <Col md="9" xs="8" className="d-flex align-items-center px-0">
                    <Card.Body className="px-0">
                        <Card.Title className="d-inline" style={{ marginRight: "50px" }}>Ticket 1</Card.Title>
                        <Card.Title className="d-inline">৳{ticket}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
            <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                <Col md="3" xs="4" className="d-flex justify-content-center align-items-center py-3">
                    <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                </Col>
                <Col md="9" xs="8" className="d-flex align-items-center px-0">
                    <Card.Body className="px-0">
                        <Card.Title className="d-inline" style={{ marginRight: "50px" }}>Ticket 2</Card.Title>
                        <Card.Title className="d-inline">৳{ticket}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
            <Row className="mx-3 mb-3 bg-white" style={{ borderRadius: "5px" }}>
                <Col md="3" xs="4" className="d-flex justify-content-center align-items-center py-3">
                    <Card.Img variant="left" src="https://i.ibb.co/FgvcB44/tickets-3.png" style={{ height: "50px" }} />
                </Col>
                <Col md="9" xs="8" className="d-flex align-items-center px-0">
                    <Card.Body className="px-0">
                        <Card.Title className="d-inline" style={{ marginRight: "50px" }}>Ticket 3</Card.Title>
                        <Card.Title className="d-inline">৳{ticket}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="d-flex justify-content-center mb-2">
                    <Button
                        onClick={() => setSearch(false)}
                        className="shadow-none"
                        variant="outline-danger"
                        size="sm">Search again</Button>
                </Col>
            </Row>
        </Card>
    );
};

export default SearchResult;