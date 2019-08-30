// @ts-nocheck
import { StringUtil } from 'utils';

describe('StringUtil', () => {
    describe('isString', () => {
        it('Should work correctly', () => {
            expect(StringUtil.isString('HelloWorld')).toBeTruthy();
            expect(StringUtil.isString(12)).toBeFalsy();
        });
    });
});
  
  