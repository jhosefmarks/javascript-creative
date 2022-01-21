const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const colors = [
  { 
    background: 'black',
    fill: 'gray'
  },
  { 
    background: '#FFBC42',
    fill: '#218380' 
  },
  { 
    background: '#8F2D56',
    fill: '#73D2DE' 
  },
  { 
    background: 'white',
    fill: 'black' 
  }
];

const sketch = () => {
  return ({ context, width, height }) => {
    const theme = random.rangeFloor(colors.length);
    context.fillStyle = colors[theme].background;
    context.fillRect(0, 0, width, height);
    
    context.fillStyle = colors[theme].fill;

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = 45;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      const x = cx + radius * Math.sin(angle);
      const y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);
      context.strokeStyle = colors[theme].fill;

      context.beginPath();
      // context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(0, -0.5), slice * random.range(0, 0.5));
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
