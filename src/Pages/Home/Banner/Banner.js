import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt=" 1st slide"
                    />
                    <Carousel.Caption>
                        <h3  class="btn btn-dark">First slide label</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="2nd slide"
                    />

                    <Carousel.Caption>
                        <h3 class="btn btn-dark">Second slide label</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="3rd slide"
                    />

                    <Carousel.Caption>
                        <h3 class="btn btn-dark"> Third slide label</h3>
                      
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;