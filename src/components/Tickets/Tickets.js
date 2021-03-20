import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData.json';
import Ticket from '../Ticket/Ticket';

const Tickets = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => setTickets(fakeData), []);

    return (
        <>
            <Container className="mt-5 d-flex align-items-center" style={{minHeight: "80vh"}}>
                <Row>
                    {
                        tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Tickets;