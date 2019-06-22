import theme from '../theme';
import StringUtil from './String';

export default class ImageUtil {
  static isAvailableUrl(url) {
    if (!StringUtil.isStringAndNotEmpty(url)) { return theme.Image.DefaultImage; }
    return url;
  }
}
