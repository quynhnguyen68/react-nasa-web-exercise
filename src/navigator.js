let _history;

function setHistory(history) {
  _history = history;
}

function navigate(routeName, params) {
  const pathname = `/${routeName}`;
  if (_history.location.pathname !== pathname) {
    _history.push(pathname, params);
  }
}

function goBack() {
  _history.goBack();
}

export default {
  setHistory,
  navigate,
  goBack,
};
