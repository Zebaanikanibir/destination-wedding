import React from 'react';
import image from '../../../../images/marryme.jpg'
import './About.css';
const About = () => {
    return (
        <section className="row container-fluid align-items-center mt-5">
            <div className="col-md-7">
            <img id="aImg" src={image} alt=""/>
            </div>
            <div className="col-md-5 right">
                <h1 className="text-center head3">Your Desire Destination Wedding</h1>
                <p className="text-center">A wedding is a ceremony where two people are united in marriage. Wedding traditions and customs vary greatly between cultures, ethnic groups, religions, countries, and social classes. Most wedding ceremonies involve an exchange of marriage vows by a couple, presentation of a gift (offering, rings, symbolic item, flowers, money, dress), and a public proclamation of marriage by an authority figure or celebrant. Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry, prayers, or readings from religious texts or literature are also commonly incorporated into the ceremony, as well as superstitious customs originating in Ancient Rome.</p>
            </div>
        </section>
    );
};

export default About;