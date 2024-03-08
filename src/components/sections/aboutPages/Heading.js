import {Link} from 'react-router-dom';

export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>About Us</h1>
                    <h2>Health is Happiness</h2>
                    <p className="subsection">
We're Fresh N Go, and We're All About Feel-Good Food!
We're more than just a restaurant; we're a community 
of passionate people who believe in the power of fresh, 
delicious food to fuel your body and spirit.
 Our story began with local friends and neighbors, 
 all sharing a love for healthy living and a desire to see our community flourish.

Driven by this passion, we embarked on a mission to create a
 fast-casual haven where you can ditch the guilt and savor 
 the good stuff. We believe in using real, organic ingredients
  to craft mouthwatering dishes that are as good for you as they taste.

Think of us as your cheerleaders on the path to a healthier,
 happier you. We're here to fuel your busy life with vibrant
  flavors and feel-good energy, all without compromising on 
  taste or convenience.

So come on down and join the Fresh N Go family! We can't
 wait to share our passion for good food and good company 
 with you. Every bite is a step towards a brighter, healthier
  you, and that's something we're all about!</p>
                   
                    <Link className="action-button" to="/">More about Us</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/aboutus.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
                
            </article>
      </header>
    );
}