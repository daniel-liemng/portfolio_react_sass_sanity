import React from 'react';

const menus = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {menus.map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={item}
          href={`#${item}`}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313bac' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
