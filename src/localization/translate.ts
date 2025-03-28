import i18n from "./index";

export const translate = (key: string, options = {}) => {
  return i18n.t(key, options);
};
