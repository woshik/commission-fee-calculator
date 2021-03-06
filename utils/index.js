const ceilAndConvertToEuro = require('./ceilAndConvertToEuro');
const convertToCents = require('./convertToCents');
const ErrorHandler = require('./ErrorHandler');
const {jsonParser} = require('./jsonParser');
const {error, terminalLog} = require('./output');
const request = require('./request');
const isNumber = require('./isNumber');

module.exports = {
  ceilAndConvertToEuro,
  convertToCents,
  ErrorHandler,
  jsonParser,
  error,
  terminalLog,
  request,
  isNumber,
};
