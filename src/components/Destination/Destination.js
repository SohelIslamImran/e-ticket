import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';
import Search from './Search/Search';
import SearchResult from './SearchResult/SearchResult';

const Destination = () => {
    const { search } = useContext(UserContext);

    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    {search.isSearched ? <SearchResult/> : <Search />}
                </Col>
                <Col xs={12} md={8}>
                    <GoogleMap />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;