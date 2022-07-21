import { expect } from 'chai';
import { ValidParentheses } from './valid-parentheses';

describe('Valid Parentheses', () => {
    it('should pass with single pair matched', () => {
        expect(ValidParentheses('()')).to.equal(true);
    });

    it('should fail with single pair mixed', () => {
        expect(ValidParentheses('[)')).to.equal(false);
    });

    it('should pass with two pairs matched', () => {
        expect(ValidParentheses('[]()')).to.equal(true);
    });

    it('should pass with two pairs mixed', () => {
        expect(ValidParentheses('[}()')).to.equal(false);
    });

    it('should pass with three pairs matched', () => {
        expect(ValidParentheses('[](){}')).to.equal(true);
    });

    it('should be false with three pairs mixed', () => {
        expect(ValidParentheses('{)[}()')).to.equal(false);
    });

    it('should handle nested sets', () => {
        expect(ValidParentheses('([{}])')).to.equal(true);
    });

    it('should catch single opening bracket', () => {
        expect(ValidParentheses(']')).to.equal(false);

    });

    it('big mix', () => {
        expect(ValidParentheses('({{{{}}}))')).to.equal(false);
    });

    it('Another one!', () => {
        expect(ValidParentheses('"(])"')).to.equal(false);
    });
});