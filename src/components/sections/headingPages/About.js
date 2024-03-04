export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Fresh N Go</h1>
                <h2>Health is Wealth</h2>
                <p className="about-subtext">Founded by Escondido locals,
                 Esvaidy Flores and Alma Packer,
                 Fresh N Go isn't just a restaurant
                  it's a passion project fueled by their genuine
                  commitment to their community's well-being.

       Esvaidy and Alma understand the importance of nourishing your body
       with fresh, high-quality ingredients that leave you feeling
       energized and vibrant. That's why Fresh N Go offers a fast-casual 
       dining experience unlike any other, where vibrant flavors and 
       exceptional nutrition go hand in hand.

       More than just a business, Fresh N Go is a labor of love.
       Esvaidy and Alma are driven by a desire to see their
       neighbors and friends thrive with the power of healthy,
          transformative food. They believe that making healthy
          choices shouldn't mean sacrificing taste or satisfaction.

       Craving something exciting, guilt-free, and energizing?
        Step into Fresh N Go, located in Escondido, 
        San Diego County, and experience the difference that fresh,
         local ingredients can make in your day.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}