export default class ItemUtil {
  static handleItemsList(items) {
    return items.map(item => ({
      ...item.data && item.data[0],
      imageUrl: item.links && item.links[0].href,
      isFavorite: false,
    }));
  }
}