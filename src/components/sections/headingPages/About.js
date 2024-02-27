export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Fresh N Go</h1>
                <h2>Health is Wealth</h2>
                <p className="about-subtext">Born from Local Passion. Fresh N Go is the result of genuine dedication to healthy living. Our founders understand the significance of nourishing your body with quality ingredients that leave you feeling light and vibrant. Experience the perfect balance of flavor and nutrition at our fast-service restaurant, designed to inspire a healthy lifestyle without compromising on taste or satisfaction.

                 This endeavor is a labor of love, fueled by the genuine wish to make a positive impact on our community.

                 Craving something new, guilt-free, and energizing?

                 Step into Fresh N Go and savor the difference that quality,

                 fresh food can make in your day!</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}