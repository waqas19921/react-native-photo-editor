"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const {
  PhotoEditor
} = _reactNative.NativeModules;
var _default = PhotoEditor;
exports.default = _default;
//# sourceMappingURL=index.js.maps: []
};
exportObject = {
  open: optionsEditor => {
    const options = { ...defaultOptions,
      ...optionsEditor
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await PhotoEditor.open(options);

        if (response) {
          resolve(response);
          return true;
        }

        throw 'ERROR_UNKNOWN';
      } catch (e) {
        reject(e);
      }
    });
  }
};
var _default = exportObject;
exports.default = _default;
//# sourceMappingURL=index.js.map