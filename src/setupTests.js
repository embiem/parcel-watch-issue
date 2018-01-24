import "./polyfills";

if (!window) {
  window = {}; // eslint-disable-line
}

window.node = {
  child_process: {
    spawn: () => {
      return true;
    }
  },
  path: {
    dirname: path => path
  }
};
