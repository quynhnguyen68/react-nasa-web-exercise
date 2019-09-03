// @ts-nocheck
import { StringUtil } from 'utils';

describe('StringUtil', () => {
    describe('isString', () => {
        it('Should work correctly', () => {
            expect(StringUtil.isString('HelloWorld')).toBeTruthy();
            expect(StringUtil.isString('')).toBeTruthy();
            expect(StringUtil.isString(12)).toBeFalsy();
            expect(StringUtil.isString({ name: "Quynh"})).toBeFalsy();
            expect(StringUtil.isString(null)).toBeFalsy();
            expect(StringUtil.isString(undefined)).toBeFalsy();
        });
    });

    describe('isStringAndNotEmpty', () => {
        it('Should work correctly', () => {
            expect(StringUtil.isStringAndNotEmpty('HelloWorld')).toBeTruthy();
            expect(StringUtil.isStringAndNotEmpty('')).toBeFalsy();
            expect(StringUtil.isStringAndNotEmpty(100.5)).toBeFalsy();
            expect(StringUtil.isStringAndNotEmpty({ name: "Quynh"})).toBeFalsy();
        });
    });

    describe('getDateFormat', () => {
        it('Should work correctly', () => {
            expect(StringUtil.getDateFormat('2011-04-01T15:00:02Z')).toEqual('APR-1-2011');
            expect(StringUtil.getDateFormat('')).toEqual('');
        });
    });

    describe('checkAutoComplete', () => {
        it('Should work correctly', () => {
            const item = "Hello World"
            expect(StringUtil.checkAutoComplete(item, 'ell')).toBeTruthy();
            expect(StringUtil.checkAutoComplete(item, 'Ho')).toBeFalsy();
        });
    });
});
  
  