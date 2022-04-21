import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';

// const abouts = [
//   {
//     title: 'Web Development',
//     description: 'I am a good developer',
//     imgUrl: images.about01,
//   },
//   {
//     title: 'Frontend Development',
//     description: 'I am a good designer',
//     imgUrl: images.about02,
//   },
//   {
//     title: 'Backend Development',
//     description: 'I am a good developer',
//     imgUrl: images.about03,
//   },
//   {
//     title: 'MERN stack',
//     description: 'I am a good developer',
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  console.log('AAA', abouts);

  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I Know that <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
