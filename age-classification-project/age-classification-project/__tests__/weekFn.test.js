// Функція, яку будемо тестувати
const weekFn = (cond) => {
    let str = '';

    switch (cond) {
        case 1:
            str = 'Понеділок';
            break;
        case 2:
            str = 'Вівторок';
            break;
        case 3:
            str = 'Середа';
            break;
        case 4:
            str = 'Четвер';
            break;
        case 5:
            str = 'П\'ятниця';
            break;
        case 6:
            str = 'Субота';
            break;
        case 7:
            str = 'Неділя';
            break;
        default:
            str = null;
    }

    return str;
};

// Тести для функції weekFn
test('weekFn should return correct day for numbers 1 to 7', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe('П\'ятниця');
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
});

test('weekFn should return null for invalid inputs', () => {
    expect(weekFn(0)).toBe(null);
    expect(weekFn(8)).toBe(null);
    expect(weekFn(1.5)).toBe(null);
    expect(weekFn('2')).toBe(null);
    expect(weekFn(-3)).toBe(null);
    expect(weekFn(undefined)).toBe(null);
    expect(weekFn(null)).toBe(null);
});
