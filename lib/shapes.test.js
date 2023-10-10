import { Triangle, Circle, Square } from './shapes';

describe('Triangle', () => {
  it('should render a triangle with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const rendered = triangle.render();
    expect(rendered).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  it('should render a circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const rendered = circle.render();
    expect(rendered).toContain('<circle cx="150" cy="110" r="80" fill="red" />');
  });
});

describe('Square', () => {
  it('should render a square with the correct color', () => {
    const square = new Square();
    square.setColor('green');
    const rendered = square.render();
    expect(rendered).toContain('<rect x="70" y="30" width="150" height="150" fill="green" />');
  });
});
