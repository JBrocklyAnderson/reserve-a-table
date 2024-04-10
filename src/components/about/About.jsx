import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <h2>The Little Lemon</h2>
            <h3><i>Ô, piccolo limone! Dove sei stato tuta la mia vita? </i></h3>
            <p>Welcome to The Little Lemon, Chicago’s home for upscale Italian cuisine, where every dish tells a story woven from generations of culinary artistry.</p>
            <h2>A Rich Heritage</h2>
            <p>Rooted in the depth of traditional Italian cooking, The Little Lemon has flourished under the visionary guidance of Chef Gianna Invernizzi. Born in the rustic hills of Tuscany, Chef Gianna brings to your table a legacy that stretches back to her Nonna’s kitchen—a quaint stone enclave where olive wood fires burned and the aroma of fresh basil and handcrafted sauces simmering on the stove danced through the air.</p>
            <h2>The Little Lemon Experience</h2>
            <h3><i>Where Tradition Meets Modern Elegance</i></h3>
            <p>Our menu, a curated selection of artisanal dishes, pays homage to Italy’s diverse regions, from the sun-kissed Amalfi Coast to the verdant valleys of Piedmont. We take pride in using only the finest, locally-sourced ingredients, and in the hands of our expert chefs, they are transformed into a tapestry of flavors that celebrate Italy's rich culinary landscape.</p>
            <p>Every dish at The Little Lemon is a testament to our commitment to tradition and quality. Our pasta is hand-rolled, our bread is baked fresh daily, and our signature limoncello whispers the secrets of age-old Italian craftsmanship.</p>
            <h2>An Ambiance Unmatched</h2>
            <p>Located in the vibrant heart of Chicago, The Little Lemon is not just about exceptional dining; it is an experience for the senses. The restaurant’s decor, an eclectic blend of old-world charm and contemporary chic, sets the stage for an unforgettable evening. From the delicate clinking of fine glassware to the soft undertones of jazz lifting smiles and conversation from every seat in the house, dining with us is a symphony of sensory delights.</p>
            <h2>A Commitment to Excellence</h2>
            <p>We are more than a restaurant; we are a family—a collective of passionate individuals dedicated to the art of hospitality. It is our pleasure to serve you and to ensure that your time with us is nothing short of extraordinary.</p>
            <p><Link to='/reserve-a-table'>Join us</Link> at The Little Lemon, where every meal is a celebration, every bite a journey, and every moment a memory in the making.</p>
            <p>Benvenuti e Buon Appetito!</p>
        </section>
    );
}

export default About;