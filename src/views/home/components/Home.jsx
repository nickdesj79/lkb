import * as React from 'react';
import Navbar from '../../../reusable/components/Navbar';
import MenuBar from '../../../reusable/components/Menubar';
import HomeCarousel from '../../../reusable/components/HomeCarousel'


export class Home extends React.Component {
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <MenuBar></MenuBar>
                <HomeCarousel></HomeCarousel>
            </div>
        );
    }
}