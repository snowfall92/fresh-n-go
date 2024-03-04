import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean Bowl that I've ever had!"/>
            <TestimonialCard name="Alan Chen" description="My Wife and family, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids and family."/>
            <TestimonialCard name="Jim Reynor" description="The food here really refreshed me after a late night shift."/>
            <TestimonialCard name="Brian Dean" description="I came to Fresh N Go after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Escondido, California."/>
            <TestimonialCard name="Jack Hu" description="This restaurant served as a perfect lunch for me after a 
                long day of studying. I would definitely order from here again, I feel energized form there healthy food!"/>
             </Carousel>
    )
}