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
            expect(StringUtil.isStringAndNotEmpty('HelloWorld')).toBeTruthy();
            expect(StringUtil.isStringAndNotEmpty('')).toBeFalsy();
            expect(StringUtil.isStringAndNotEmpty(100.5)).toBeFalsy();
            expect(StringUtil.isStringAndNotEmpty({ name: "Quynh"})).toBeFalsy();
        });
    });
});
  
  