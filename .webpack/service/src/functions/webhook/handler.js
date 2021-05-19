/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/webhook/handler.ts":
/*!******************************************!*\
  !*** ./src/functions/webhook/handler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _libs_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @libs/models */ \"./src/libs/models.ts\");\n/* harmony import */ var _libs_dynamo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @libs/dynamo */ \"./src/libs/dynamo.ts\");\n/* harmony import */ var _libs_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @libs/notifier */ \"./src/libs/notifier.ts\");\n\n\n\n\n\n\n\nconst webhook = async (event) => {\n    const signatureValidationObj = {\n        signingKey: process.env.MAILGUN_SIGNING_KEY,\n        timestamp: event.body.signature.timestamp,\n        token: event.body.signature.token,\n        signature: event.body.signature.signature\n    };\n    const isRequestValid = isValidSignature(signatureValidationObj);\n    if (!isRequestValid) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__.formatJSONResponse)(406, {\n            message: \"Request can not be verified\"\n        });\n    }\n    const storageContext = new _libs_models__WEBPACK_IMPORTED_MODULE_4__.StorageContext(new _libs_dynamo__WEBPACK_IMPORTED_MODULE_5__.Dynamo());\n    const tableName = process.env.DB_TABLE;\n    storageContext.save(tableName, event.body);\n    const eventData = {\n        provider: process.env.EMAIL_PROVIDER,\n        timestamp: event.body['event-data'].timestamp,\n        event: event.body['event-data'].event\n    };\n    const notifierContext = new _libs_models__WEBPACK_IMPORTED_MODULE_4__.NotifierContext(new _libs_notifier__WEBPACK_IMPORTED_MODULE_6__.Notifier());\n    notifierContext.publish(eventData);\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__.formatJSONResponse)(200, {});\n};\nconst isValidSignature = ({ signingKey, timestamp, token, signature }) => {\n    const encodedToken = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)('sha256', signingKey)\n        .update(timestamp.concat(token))\n        .digest('hex');\n    return (encodedToken === signature);\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_3__.middyfy)(webhook);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3dlYmhvb2svaGFuZGxlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VldmUvLi9zcmMvZnVuY3Rpb25zL3dlYmhvb2svaGFuZGxlci50cz84M2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhtYWMgfSBmcm9tICdjcnlwdG8nO1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuXG5pbXBvcnQgdHlwZSB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5cblxuaW1wb3J0IHsgSUV2ZW50RGF0YSwgTm90aWZpZXJDb250ZXh0LCBTdG9yYWdlQ29udGV4dCB9IGZyb20gJ0BsaWJzL21vZGVscyc7XG5pbXBvcnQgeyBEeW5hbW8gfSBmcm9tICdAbGlicy9keW5hbW8nO1xuaW1wb3J0IHsgTm90aWZpZXIgfSBmcm9tICdAbGlicy9ub3RpZmllcic7XG5cbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuXG5cbmNvbnN0IHdlYmhvb2s6IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8dHlwZW9mIHNjaGVtYT4gPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZhbGlkYXRpb25PYmogPSB7XG4gICAgICAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52Lk1BSUxHVU5fU0lHTklOR19LRVksXG4gICAgICAgIHRpbWVzdGFtcDogZXZlbnQuYm9keS5zaWduYXR1cmUudGltZXN0YW1wLFxuICAgICAgICB0b2tlbjogZXZlbnQuYm9keS5zaWduYXR1cmUudG9rZW4sXG4gICAgICAgIHNpZ25hdHVyZTogZXZlbnQuYm9keS5zaWduYXR1cmUuc2lnbmF0dXJlXG4gICAgfTtcbiAgICBjb25zdCBpc1JlcXVlc3RWYWxpZCA9IGlzVmFsaWRTaWduYXR1cmUoc2lnbmF0dXJlVmFsaWRhdGlvbk9iaik7XG5cbiAgICBpZiAoIWlzUmVxdWVzdFZhbGlkKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoNDA2LCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlJlcXVlc3QgY2FuIG5vdCBiZSB2ZXJpZmllZFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTYXZlIHRoZSB3ZWJob29rIGRhdGEgdG8gZGF0YWJhc2VcbiAgICBjb25zdCBzdG9yYWdlQ29udGV4dCA9IG5ldyBTdG9yYWdlQ29udGV4dChuZXcgRHluYW1vKCkpO1xuICAgIGNvbnN0IHRhYmxlTmFtZSA9IHByb2Nlc3MuZW52LkRCX1RBQkxFO1xuICAgIHN0b3JhZ2VDb250ZXh0LnNhdmUodGFibGVOYW1lLCBldmVudC5ib2R5KTtcblxuICAgIC8vIHB1Ymxpc2ggZXZlbnQgdG8gYSBwdWItc3ViIHNlcnZpY2VcbiAgICBjb25zdCBldmVudERhdGE6SUV2ZW50RGF0YSA9IHtcbiAgICAgICAgcHJvdmlkZXI6IHByb2Nlc3MuZW52LkVNQUlMX1BST1ZJREVSLFxuICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmJvZHlbJ2V2ZW50LWRhdGEnXS50aW1lc3RhbXAsXG4gICAgICAgIGV2ZW50OiBldmVudC5ib2R5WydldmVudC1kYXRhJ10uZXZlbnRcbiAgICB9XG4gICAgY29uc3Qgbm90aWZpZXJDb250ZXh0ID0gbmV3IE5vdGlmaWVyQ29udGV4dChuZXcgTm90aWZpZXIoKSk7XG4gICAgbm90aWZpZXJDb250ZXh0LnB1Ymxpc2goZXZlbnREYXRhKTtcblxuICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2UoMjAwLCB7fSk7XG59XG5cblxuY29uc3QgaXNWYWxpZFNpZ25hdHVyZSA9ICh7IHNpZ25pbmdLZXksIHRpbWVzdGFtcCwgdG9rZW4sIHNpZ25hdHVyZSB9KSA9PiB7XG5cbiAgICBjb25zdCBlbmNvZGVkVG9rZW4gPSBjcmVhdGVIbWFjKCdzaGEyNTYnLCBzaWduaW5nS2V5KVxuICAgICAgLnVwZGF0ZSh0aW1lc3RhbXAuY29uY2F0KHRva2VuKSlcbiAgICAgIC5kaWdlc3QoJ2hleCcpO1xuICAgIFxuICAgIHJldHVybiAoZW5jb2RlZFRva2VuID09PSBzaWduYXR1cmUpXG59XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeSh3ZWJob29rKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/webhook/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (status, response) => {\n    return {\n        statusCode: status,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWV2ZS8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7IGJvZHk6IEZyb21TY2hlbWE8Uz4gfVxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8VmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sIEFQSUdhdGV3YXlQcm94eVJlc3VsdD5cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChzdGF0dXM6IG51bWJlciwgcmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/dynamo.ts":
/*!****************************!*\
  !*** ./src/libs/dynamo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dynamo\": () => (/* binding */ Dynamo)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/lib-dynamodb */ \"@aws-sdk/lib-dynamodb\");\n/* harmony import */ var _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass Dynamo {\n    constructor() {\n        const client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDB({\n            region: process.env.REGION\n        });\n        this.DBClient = _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__.DynamoDBDocumentClient.from(client);\n    }\n    async save(tableName, data) {\n        data.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();\n        const params = {\n            TableName: tableName,\n            Item: data,\n        };\n        try {\n            await this.DBClient.send(new _aws_sdk_lib_dynamodb__WEBPACK_IMPORTED_MODULE_1__.PutCommand(params));\n        }\n        catch (err) {\n            throw new Error(err.message);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9keW5hbW8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlZXZlLy4vc3JjL2xpYnMvZHluYW1vLnRzP2NlMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREIgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7XG5pbXBvcnQgeyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50LCBQdXRDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2xpYi1keW5hbW9kYlwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBEeW5hbW8gaW1wbGVtZW50cyBJU3RvcmFnZSB7XG5cbiAgICBwcml2YXRlIERCQ2xpZW50OiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgRHluYW1vREIoe1xuICAgICAgICAgICAgcmVnaW9uOiBwcm9jZXNzLmVudi5SRUdJT05cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuREJDbGllbnQgPSBEeW5hbW9EQkRvY3VtZW50Q2xpZW50LmZyb20oY2xpZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZSh0YWJsZU5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XG5cbiAgICAgICAgZGF0YS5pZCA9IHV1aWR2NCgpO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIFRhYmxlTmFtZTogdGFibGVOYW1lLFxuICAgICAgICAgICAgSXRlbTogZGF0YSxcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuREJDbGllbnQuc2VuZChuZXcgUHV0Q29tbWFuZChwYXJhbXMpKTsgIFxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/dynamo.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlZXZlLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/libs/models.ts":
/*!****************************!*\
  !*** ./src/libs/models.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StorageContext\": () => (/* binding */ StorageContext),\n/* harmony export */   \"NotifierContext\": () => (/* binding */ NotifierContext)\n/* harmony export */ });\nclass StorageContext {\n    constructor(strategy) {\n        this.strategy = strategy;\n    }\n    setStrategy(strategy) {\n        this.strategy = strategy;\n    }\n    save(tableName, data) {\n        this.strategy.save(tableName, data);\n    }\n}\nclass NotifierContext {\n    constructor(strategy) {\n        this.strategy = strategy;\n    }\n    setStrategy(strategy) {\n        this.strategy = strategy;\n    }\n    publish(data) {\n        this.strategy.publish(data);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9tb2RlbHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlZXZlLy4vc3JjL2xpYnMvbW9kZWxzLnRzP2M5NjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJRXZlbnREYXRhIHtcbiAgICBwcm92aWRlcjogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIGV2ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JhZ2Uge1xuICAgIHNhdmUodGFibGVOYW1lOiBzdHJpbmcsIGRhdGE6IGFueVtdKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU5vdGlmaWVyIHtcbiAgICBwdWJsaXNoKGRhdGE6IElFdmVudERhdGEpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgU3RvcmFnZUNvbnRleHQge1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUge0lTdG9yYWdlfSBUXG4gICAgKi9cbiAgICBwcml2YXRlIHN0cmF0ZWd5OiBJU3RvcmFnZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OiBJU3RvcmFnZSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFN0cmF0ZWd5KHN0cmF0ZWd5OiBJU3RvcmFnZSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUodGFibGVOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5LnNhdmUodGFibGVOYW1lLCBkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmllckNvbnRleHQge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtJTm90aWZpZXJ9IFRcbiAgICAqL1xuICAgIHByaXZhdGUgc3RyYXRlZ3k6IElOb3RpZmllcjtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OiBJTm90aWZpZXIpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTdHJhdGVneShzdHJhdGVneTogSU5vdGlmaWVyKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVibGlzaChkYXRhOiBJRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kucHVibGlzaChkYXRhKTtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7OztBQWFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/models.ts\n");

/***/ }),

/***/ "./src/libs/notifier.ts":
/*!******************************!*\
  !*** ./src/libs/notifier.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notifier\": () => (/* binding */ Notifier)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_sns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-sns */ \"@aws-sdk/client-sns\");\n/* harmony import */ var _aws_sdk_client_sns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_sns__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Notifier {\n    constructor() {\n        this.snsClient = new _aws_sdk_client_sns__WEBPACK_IMPORTED_MODULE_0__.SNSClient({\n            region: process.env.REGION\n        });\n    }\n    async publish(data) {\n        const params = {\n            Message: JSON.stringify({\n                default: JSON.stringify(data)\n            }),\n            MessageStructure: 'json',\n            TopicArn: process.env.SNS_TOPIC_ARN\n        };\n        try {\n            await this.snsClient.send(new _aws_sdk_client_sns__WEBPACK_IMPORTED_MODULE_0__.PublishCommand(params));\n        }\n        catch (err) {\n            throw new Error(err.message);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9ub3RpZmllci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VldmUvLi9zcmMvbGlicy9ub3RpZmllci50cz8wYTcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNOU0NsaWVudCwgUHVibGlzaENvbW1hbmQgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtc25zJztcbmltcG9ydCB7IElFdmVudERhdGEsIElOb3RpZmllciB9IGZyb20gJy4vbW9kZWxzJztcblxuXG5leHBvcnQgY2xhc3MgTm90aWZpZXIgaW1wbGVtZW50cyBJTm90aWZpZXIge1xuXG4gICAgcHJpdmF0ZSBzbnNDbGllbnQ6IFNOU0NsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zbnNDbGllbnQgPSBuZXcgU05TQ2xpZW50KHtcbiAgICAgICAgICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuUkVHSU9OXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBwdWJsaXNoKGRhdGE6IElFdmVudERhdGEpIHtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBNZXNzYWdlOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgTWVzc2FnZVN0cnVjdHVyZTogJ2pzb24nLFxuICAgICAgICAgICAgVG9waWNBcm46IHByb2Nlc3MuZW52LlNOU19UT1BJQ19BUk5cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc25zQ2xpZW50LnNlbmQobmV3IFB1Ymxpc2hDb21tYW5kKHBhcmFtcykpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/notifier.ts\n");

/***/ }),

/***/ "@aws-sdk/client-dynamodb":
/*!*******************************************!*\
  !*** external "@aws-sdk/client-dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");;

/***/ }),

/***/ "@aws-sdk/client-sns":
/*!**************************************!*\
  !*** external "@aws-sdk/client-sns" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-sns");;

/***/ }),

/***/ "@aws-sdk/lib-dynamodb":
/*!****************************************!*\
  !*** external "@aws-sdk/lib-dynamodb" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/lib-dynamodb");;

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/webhook/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;