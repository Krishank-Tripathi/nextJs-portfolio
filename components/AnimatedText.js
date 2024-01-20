import React from 'react';

const AnimatedText = ({ text, color }) => {
  const gradientColor = color ? color: 'from-teal-500 via-purple-500 to-orange-500';
  const gradientClass = `bg-gradient-to-r ${gradientColor}`;

  return (
    <h1 className={`animate-text ${gradientClass} bg-clip-text text-transparent text-5xl font-black`}>
      {text}
    </h1>
  );
};

export default React.memo(AnimatedText);
