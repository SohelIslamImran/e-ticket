import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Search = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser, ticketCost, setTicketCost, search, setSearch] = useContext(UserContext);

    const onSubmit = data => {
        data.isSearched = true;
        setSearch(data)
    }

    return (
        <>
            <Card className="my-5" style={{ background: "#EFEFEF", borderRadius: "10px" }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control name="pickFrom" defaultValue={search.pickFrom} ref={register} type="text" placeholder="From" autoFocus />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control name="pickTo" defaultValue={search.pickTo} ref={register} type="text" placeholder="To" />
                        </Form.Group>
                        <Button variant="primary" className="shadow-none" type="submit" block>
                            Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Search;