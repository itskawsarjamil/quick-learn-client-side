import React from 'react';
import { Container } from 'react-bootstrap';

const Fourofour = () => {
    return (
        <div>
            <Container className='w-25 mx-auto border p-5 m-5 shadow bg-dark text-white bg-opacity-50 rounded-4 text-center ' >
                <h1 className='text-warning'>404</h1>
            <h2>Sorry The Page you are requesting is not available</h2>
            </Container>
        </div>
    );
};

export default Fourofour;