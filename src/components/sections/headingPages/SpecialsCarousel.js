import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-desser.webp';
import SpecialCard from './CardInfo/SpecialCard';
import Breakfastbowl from '../../../assets/food/breakfastbowl.webp';
import Buildurbowl from '../../../assets/food/buildurbowl.webp';
import Machobananas from '../../../assets/food/machobananas.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles


export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false} >
            <SpecialCard image={GreekSalad} name="Earthy Bowl" price="$13.75" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta} name="Mediterranean Bowl" price="$14.95" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Blue Spirulina Chia Pudding" price="$6.99" description="Lemon bread, vanilla Icing"/>
            <SpecialCard image={Breakfastbowl} name="Earthy Bowl" price="$13.75" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Buildurbowl} name="Build Your Own Bowl" price="$14.95" description="Bread, mango, green onions"/>
            <SpecialCard image={Machobananas} name="Topped with Plantains" price="$6.99" description="Plantains can be enjoyed in various ways. They can be boiled, fried, baked, or roasted, making them a versatile addition to savory and sweet dishes."/>
        </Carousel>
    )
}