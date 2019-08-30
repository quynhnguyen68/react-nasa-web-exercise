export default class StringUtil {
  /**
   * @param {any} value
   */
  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  /**
   * @param {any} value
   */
  static isStringAndNotEmpty(value) {
    if (value && StringUtil.isString(value)) return true;
    return false;
  }

  static getDateFormat(date){
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const currentDate = new Date(date);
    const formattedDate =  months[currentDate.getMonth()] + "-" + currentDate.getDate() + "-" + currentDate.getFullYear()
    return formattedDate;
  }

  static checkAutoComplete(item, query) {
    const newQuery = query.split(' ');
    if (!query || newQuery.length === 1) {
      return item.indexOf(newQuery[0]) !== -1;
    }
    const { length } = newQuery;
    let valid = item.indexOf(newQuery[0]) !== -1;
    for (let i = 1; i < length; i++) {
      valid = valid && item.indexOf(newQuery[i]) !== -1;
    }
    return valid;
  }
}
