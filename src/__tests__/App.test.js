import { add } from '../App';

console.log(add(5,2)); 

test('Test Sum', ()=> {
    const value = add(3,4);
    expect(value).toBe(7);
});