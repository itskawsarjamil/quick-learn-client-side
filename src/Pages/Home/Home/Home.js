import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';
import ebanner from '../../../assets/brands/banner/e-banner.jpg';

const Home = () => {

    return (
        <div>
            <div className='about'>
                <h2>Welcome to Quick Learn</h2>
                <h5>Let's Learn something new in quick with fun</h5>
            </div>
            
            
            <Card className="text-white">
                <Card.Img src={ebanner} alt="Card image" />
                {/* <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay> */}
            </Card>
        </div>
    );
};

export default Home;