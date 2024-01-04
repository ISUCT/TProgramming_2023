import Fox from '../src/fox';

describe('Testing fox methods', () => {
  describe('Method: getView', () => {
    it('A fox like yourself', () => {
      const test = new Fox('Lisa', 'Black', 2015);
      expect(test.getView()).toEqual(`
        /\\     /\\
       /  \\___/  \\
      /  ( o o )   \\
     /   |  Y  |    \\
    /   )|  -  |(    \\
   /   / |-----| \\   \\
  /    ) |-----|  (   \\
  \\______|-----|______/
        /       \\
       /  /|   |\\ \\
      /  / |___| \\ \\
     |  /        \\  |
     |__|        |__|
      `);
    });
  });

  describe('Method: infoAboutFox', () => {
    it('should log the correct information about the fox', () => {
      const test = new Fox('Foxy', 'Red', 2015);
      expect(test.info()).toEqual('Your fox is named Foxy , has Red coat color, and is 2015 years old.');
    });

    it('should log the correct information about the fox without info', () => {
      const test = new Fox();
      expect(test.info()).toEqual('No info, only view');
    });
  });

  describe('Method: changeColor', () => {
    it('should change the fox color', () => {
      const fox = new Fox('Foxy', 'Red');
      fox.changeColor('Gray');
      expect(fox.color).toBe('Gray');
    });

    it('should change the fox color without info', () => {
      const fox = new Fox();
      fox.changeColor('Gray');
      expect(fox.color).toBe('Gray');
    });
  });

  describe('Method: makeSound', () => {
    it('should log the correct sound', () => {
      const fox = new Fox('Foxy', 'Red');
      expect(fox.makeSound()).toEqual('The fox makes a squeaky sound.');
    });
  });

  describe('Method: hunt', () => {
    it('should log the correct hunting message', () => {
      const fox = new Fox('Foxy', 'Red');
      expect(fox.hunt('rabbit')).toEqual('Foxy hunts rabbit');
    });
  });
});
