import { Ship } from "../ship";

let s = new Ship("Destroyer")

test('Destroyer length to be 2 ', () => {
    expect(s.length).toBe(2);
});
test('Sunks successfully', () => {
    s.hit()
    s.hit()
    expect(s.isSunk()).toBe(true);
});