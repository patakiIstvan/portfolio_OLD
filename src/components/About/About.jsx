import React from 'react';

function About() {
  return (
    <section className="about-me section">
      <div className="about-me__container">
        <div className="about-me__title">
          <h2 className="about-me__title-text">Things worth sharing</h2>
        </div>
        <div className="about-me__bottom-container">
          <img className="about-me__pic" src="https://i.pinimg.com/564x/ca/12/36/ca123649022fb3f369f2ebe07f8bd0e6.jpg" alt="pic of armin the smartest guy in aot" />
          <p className="about-me__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus rerum expedita dolorum voluptatum enim a non, inventore quis nihil ea? Nobis dignissimos commodi, maxime corrupti tempore autem eius ipsam!
            Maiores suscipit labore commodi esse maxime adipisci praesentium quod aperiam aliquam. Illum unde iure, qui, molestiae delectus voluptate nihil, in omnis neque non itaque quam rerum tenetur animi illo quasi?</p>
        </div>
      </div>
    </section>
  );
}

export default About;
