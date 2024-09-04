const ageClassification = (num) => {
    return num < 0 ? null :
        num <= 24 ? 'Дитинство' :
            num <= 44 ? 'Молодість' :
                num <= 65 ? 'Зрілість' :
                    num <= 75 ? 'Старість' :
                        num <= 90 ? 'Довголіття' :
                            num <= 122 ? 'Рекорд' : null;
};

test('ageClassification function', () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(0)).toBe('Дитинство');
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
});
