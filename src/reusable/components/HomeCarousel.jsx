import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
 
class HomeCarousel extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false} >
                <div>
                        <img src={Image1} style={{width:'100%',height:'100%'}} alt='legend1' />   
                </div>
                <div>
                        <img src={Image2} style={{width:'100%',height:800}}  alt='legend2' /> 
                </div>
            </Carousel>
        );
    }
};

export default HomeCarousel;
 