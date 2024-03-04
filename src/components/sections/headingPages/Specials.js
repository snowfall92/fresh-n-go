import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-desser.webp';
import SpecialCard from './CardInfo/SpecialCard';
import BreakfastBowl from '../../../assets/food/breakfastbowl.webp';
import Buildurbowl from '../../../assets/food/buildurbowl.webp';
import Machobananas from '../../../assets/food/machobananas.webp';



export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This Weeks Specials</h1>
                <a className="action-button" href={require('../../../assets/Fresh N Go - Menu.pdf')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Earthy Bowl" price="$13.75" description="Spring mix, Quinoa, Avocado, Spring onions, Cucumber, Cherry tomatoes, Sesame Seeds, Chipotle sauce, Grilled tofu & Sweet potatoes. Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bruschetta} name="Mediterranean Bowl" price="$14.95" description="Spring Mix, White Rice, Garbanzo Beans, Olives, Cherry Tomatoes, Red Onion, Cucumber, Feta Cheese, Garlic-Cilantro Sauce, Australian Lamb Leg."/>
                <SpecialCard image={LemonDessert} name="Blue Spirulina Chia Pudding" price="$6.99" description="Chia seed pudding is a healthy pudding made with rich in fiber chia seeds, coconut milk, blue spirulina, a little sweetener, and optional fresh fruit flavoring and toppings."/>

                <SpecialCard image={BreakfastBowl} name="Breakfast Bowls" price="13.99" description="Try pur New Special Breakfast Bowl with 3 Eggs any Style Sausage Spanish Style Potatoes, vegetables and toast."/>
                <SpecialCard image={Buildurbowl} name="Build Your Own Bowl" price="$14.95" description="Spring Mix, White Rice, Garbanzo Beans, Olives, Cherry Tomatoes, Red Onion, Cucumber, Feta Cheese, Garlic-Cilantro Sauce, Australian Lamb Leg."/>
                <SpecialCard image={Machobananas} name="Topped with Plantains" price="$6.99" description="Plantains can be enjoyed in various ways. They can be boiled, fried, baked, or roasted, making them a versatile addition to savory and sweet dishes."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}