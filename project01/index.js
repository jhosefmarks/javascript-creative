const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = Math.random() > 0.5 ? 'black' : 'white';
    context.fillRect(0, 0, width, height);
    
    context.lineWidth = width * 0.01;

    const palette01 = [
      '#020024', 
      '#090979', 
      '#0654aa', 
      '#0396d6', 
      '#00d4ff',
      '#0396d6', 
      '#0654aa', 
      '#090979', 
      '#020024', 
    ];

    const palette02 = [
      '#FFBC42', 
      '#D81159', 
      '#8F2D56', 
      '#218380', 
      '#73D2DE',
      '#218380', 
      '#8F2D56', 
      '#D81159', 
      '#FFBC42', 
    ];

    const colors = Math.random() > 0.5 ? palette01 : palette02;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03; 
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let x = ix + (w + gap) * i;
        let y = iy + (h + gap) * j;

        context.strokeStyle = colors[i + j];
        
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() < 0.4) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
        
      }
    }
  };
};

canvasSketch(sketch, settings);
