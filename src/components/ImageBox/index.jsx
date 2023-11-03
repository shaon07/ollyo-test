import React, { forwardRef } from 'react';

export const ImageBox = forwardRef(({url, index, faded, style, ...props}, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    ...style,
  };

  return (
      <div ref={ref} style={inlineStyles} {...props} className='border-2 inline-block border-[#c7c7c7] rounded-md'>
        <p>hello</p>
      </div>
  );
});
