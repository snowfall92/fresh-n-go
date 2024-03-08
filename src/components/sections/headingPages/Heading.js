import {Link} from 'react-router-dom';
import React from 'react';

export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Fresh N Go</h1>
                    <h2>Health is Happiness</h2>
                    <p className="subsection">
Craving Fun, Flavorful Food for the Whole Family? Fresh N Go Has You Covered!
Looking for a delightful dining experience that caters to everyone, including
 families? Look no further than Fresh N Go! We're passionate about healthy
  living and bringing joy to the Escondido community through our mouthwatering,
   guilt-free meals.

Imagine gathering your loved ones for a fun-filled feast where everyone can 
find something they'll love and feel good about. Whether you're seeking nutritious,
 fresh, and organic options or gluten-free alternatives, Fresh N Go has something 
 to satisfy every taste bud.

Join us today and experience the Fresh N Go difference!</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
  <img src={require('../../../assets/food/food5.jpeg')} alt="Little Lemon restaurant cuisine" controls autoplay muted loop></img>
</section>
            </article>
      </header>
    );
}