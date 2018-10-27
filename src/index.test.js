import sensitiveWords from '.';

test('Replaces blacklisted words with asterisks', () => (
    expect(sensitiveWords(
        'The name of the NX will be the Nintendo Switch', 
        ['switch'])).toBe(
        'The name of the NX will be the Nintendo ***')
));

test('Replaces multiple instances of blacklisted words', () => (
    expect(sensitiveWords(
        'The name of the NX will be the Nintendo Switch. The Switch will be awesome', 
        ['switch'])).toBe(
        'The name of the NX will be the Nintendo ***. The *** will be awesome')
));