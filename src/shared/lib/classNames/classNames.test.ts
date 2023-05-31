import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional class', () => {
        const expected = 'testClass class1 class2';
        expect(classNames('testClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'testClass class1 class2 hovered scrollable';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'testClass class1 class2 hovered';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'testClass class1 class2 hovered';
        expect(classNames(
            'testClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
