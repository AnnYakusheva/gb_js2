import { pow } from '../src/utils.mjs'

describe('Функция pow()', () => {
    it('должна возвращать 9 при аргументах (3,2)', () => {
        expect(pow(3,2)).toBe(9)
    })

    it('должна возвращать 1 при аргументах (3,0)', () => {
        expect(pow(3,0)).toBe(1)
    })
})