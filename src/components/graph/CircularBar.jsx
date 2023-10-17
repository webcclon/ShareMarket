const getPath = (x, y, width, height, radius) => {
  const rx = Math.min(width / 2, radius);
  const ry = Math.min(height / 2, radius);
  const pathData = `
    M${x + rx},${y} 
    L${x + width - rx},${y} 
    A${rx},${ry} 0 0 1 ${x + width},${y + ry} 
    L${x + width},${y + height - ry} 
    A${rx},${ry} 0 0 1 ${x + width - rx},${y + height} 
    L${x + rx},${y + height} 
    A${rx},${ry} 0 0 1 ${x},${y + height - ry} 
    L${x},${y + ry} 
    A${rx},${ry} 0 0 1 ${x + rx},${y} 
    Z`;

  return pathData;
};


const CircularBar = (props) => {
    const { fill, x, y, width, height, radius } = props;
    return <path d={getPath(x, y, width, height, 10)} stroke="none" fill={fill} />;
  };

export default CircularBar;