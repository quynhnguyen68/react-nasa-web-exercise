export default class StringUtil {
  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

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
}
