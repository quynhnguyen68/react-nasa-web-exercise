import theme from 'theme';
import { ImageUtil } from 'utils';

describe('ImageUtil', () => {
    describe('isAvailableUrl', () => {
        it('Should work correctly', () => {
            const url = 'https://test.image.com/image.png';
            expect(ImageUtil.isAvailableUrl(url)).toEqual(url);
            expect(ImageUtil.isAvailableUrl('')).toEqual(theme.Image.DefaultImage);
            expect(ImageUtil.isAvailableUrl(undefined)).toEqual(theme.Image.DefaultImage);
        });
    });
});
  
  