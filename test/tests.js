import { convert } from '../utils.js';

const test = QUnit.test;

// convert > {add, subtract, multiply, divide}


test('Integer Addition, expects 6 + 4', (expect) => {
    //Arrange
    const expected = 10;
    
    //Act 
    const actual = convert['add'](6, 4);

    //Expect

    expect.equal(actual, expected);
});

test('Integer Subtraction, expects 10 - 4', (expect) => {
    //Arrange
    const expected = 6;
    
    //Act 
    const actual = convert['subtract'](10, 4);

    //Expect

    expect.equal(actual, expected);
});

test('Integer Multiplication, expects 10 * 2', (expect) => {
    //Arrange
    const expected = 20;
    
    //Act 
    const actual = convert['multiply'](10, 2);

    //Expect

    expect.equal(actual, expected);
});

test('Integer Division, expects 16 / 2', (expect) => {
    //Arrange
    const expected = 8;
    
    //Act 
    const actual = convert['divide'](16, 2);

    //Expect

    expect.equal(actual, expected);
});

