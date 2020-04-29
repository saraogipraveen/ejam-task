const isEmpty = require("is-empty");
const validator = require("validator");

module.exports = function (data) {
  const errors = {};

  data.url = !isEmpty(data.url) ? data.url : "";
  data.templateName = !isEmpty(data.templateName) ? data.templateName : "";
  data.version = !isEmpty(data.version) ? data.version : "";

  if (isEmpty(data.url)) errors.url = "Url field is required.";
  else if (!validator.isURL(data.url)) errors.url = "Url must be a valid URL.";
  if (isEmpty(data.templateName))
    errors.templateName = "Template Name field is required.";
  if (isEmpty(data.version)) errors.version = "Version field is required.";

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
