import { Person } from '../src/person';
import { describe } from 'node:test';
import { it } from 'node:test';
import { expect } from 'chai';

describe('Testing person constructor', () => {
  it('Person must be create', () => {
    const first = new Person('Kate', 15, 'woman');
    expect(first.name).equal('Kate');
    expect(first.age).equal(15);
    expect(first.gender).equal('woman');
  });

  it('Person must be a man', () => {
    const first = new Person('Ben', 40);
    expect(first.name).equal('Ben');
    expect(first.age).equal(40);
    expect(first.gender).equal('man');
  });

  it('Person must be a woman', () => {
    const first = Person.createWoman('Kate', 20);
    expect(first.name).equal('Kate');
    expect(first.age).equal(20);
    expect(first.gender).equal('woman');
  });

});

describe('Testing person methods', () => {
  it('Person must be greet', () => {
    const first = new Person('Debby', 20, 'woman');
    expect(first.greet()).equal('Hello, my name is Debby. I am 20 years old and I am a woman.')
  });
  it('Person must be greet', () => {
    const first = new Person('Karl', 18);
    expect(first.greet()).equal('Hello, my name is Karl. I am 18 years old and I am a man.')
  });
  it('Must prove adulthood', () => {
    const first = new Person('Debby', 20, 'woman');
    expect(first.isAdult()).equal(true)
  });
  it('Must not prove adulthood', () => {
    const first = new Person('Liam', 12,);
    expect(first.isAdult()).equal(false)
  });

  it('Must show information about person', () => {
    const first = new Person('Frank', 50);
    expect(first.toString()).equal('Person: Frank, 50, man')
  });

  it('Must show information about person', () => {
    const first = Person.createWoman('Monika', 42);
    expect(first.toString()).equal('Person: Monika, 42, woman')
  });
});