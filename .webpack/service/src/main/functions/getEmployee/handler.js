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

/***/ "./src/data/factories/factory-get-employee.ts":
/*!****************************************************!*\
  !*** ./src/data/factories/factory-get-employee.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factoryGetEmployee\": () => (/* binding */ factoryGetEmployee)\n/* harmony export */ });\n/* harmony import */ var _presentation_services_get_employee_dynamodb_get_employee_dynamodb_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../presentation/services/get-employee-dynamodb/get-employee-dynamodb.service */ \"./src/presentation/services/get-employee-dynamodb/get-employee-dynamodb.service.ts\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst factoryGetEmployee = () => {\n    const docClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__.DynamoDB.DocumentClient();\n    return new _presentation_services_get_employee_dynamodb_get_employee_dynamodb_service__WEBPACK_IMPORTED_MODULE_0__.GetEmployeeDynamoDBService(docClient);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9mYWN0b3JpZXMvZmFjdG9yeS1nZXQtZW1wbG95ZWUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS1yZWNvcmQvLi9zcmMvZGF0YS9mYWN0b3JpZXMvZmFjdG9yeS1nZXQtZW1wbG95ZWUudHM/NDcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRFbXBsb3llZUR5bmFtb0RCU2VydmljZSB9IGZyb20gJy4vLi4vLi4vcHJlc2VudGF0aW9uL3NlcnZpY2VzL2dldC1lbXBsb3llZS1keW5hbW9kYi9nZXQtZW1wbG95ZWUtZHluYW1vZGIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XG5pbXBvcnQgeyBJR2V0RW1wbG95ZWUgfSBmcm9tICcuLy4uLy4uL2RvbWFpbi91c2VjYXNlcy9nZXQtZW1wbG95ZWUnO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yeUdldEVtcGxveWVlID0gKCk6SUdldEVtcGxveWVlID0+IHtcbiAgY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpXG4gIHJldHVybiBuZXcgR2V0RW1wbG95ZWVEeW5hbW9EQlNlcnZpY2UoZG9jQ2xpZW50KVxufSAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/factories/factory-get-employee.ts\n");

/***/ }),

/***/ "./src/main/functions/getEmployee/handler.ts":
/*!***************************************************!*\
  !*** ./src/main/functions/getEmployee/handler.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _data_factories_factory_get_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../data/factories/factory-get-employee */ \"./src/data/factories/factory-get-employee.ts\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_main_libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/main/libs/apiGateway */ \"./src/main/libs/apiGateway.ts\");\n\n\n\nconst handler = async (event) => {\n    const service = (0,_data_factories_factory_get_employee__WEBPACK_IMPORTED_MODULE_0__.factoryGetEmployee)();\n    const employeeResult = await service.execute({ id: event.queryStringParameters.id });\n    return (0,src_main_libs_apiGateway__WEBPACK_IMPORTED_MODULE_2__.formatJSONResponse)({\n        message: `Record captured successfully`,\n        data: employeeResult\n    });\n};\nconst main = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9mdW5jdGlvbnMvZ2V0RW1wbG95ZWUvaGFuZGxlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2VtcGxveWVlLXJlY29yZC8uL3NyYy9tYWluL2Z1bmN0aW9ucy9nZXRFbXBsb3llZS9oYW5kbGVyLnRzP2M2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFjdG9yeUdldEVtcGxveWVlIH0gZnJvbSAnLi8uLi8uLi8uLi9kYXRhL2ZhY3Rvcmllcy9mYWN0b3J5LWdldC1lbXBsb3llZSc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgdHlwZSB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tICdzcmMvbWFpbi9saWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgZm9ybWF0SlNPTlJlc3BvbnNlIH0gZnJvbSAnc3JjL21haW4vbGlicy9hcGlHYXRld2F5JztcblxuY29uc3QgaGFuZGxlcjogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxudWxsPiA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBzZXJ2aWNlID0gZmFjdG9yeUdldEVtcGxveWVlKClcblxuICBjb25zdCBlbXBsb3llZVJlc3VsdCA9IGF3YWl0IHNlcnZpY2UuZXhlY3V0ZSh7aWQ6IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycy5pZH0pXG4gXG4gIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgIG1lc3NhZ2U6IGBSZWNvcmQgY2FwdHVyZWQgc3VjY2Vzc2Z1bGx5YCxcbiAgICBkYXRhOiBlbXBsb3llZVJlc3VsdFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IG1haW4gPSBoYW5kbGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/functions/getEmployee/handler.ts\n");

/***/ }),

/***/ "./src/main/libs/apiGateway.ts":
/*!*************************************!*\
  !*** ./src/main/libs/apiGateway.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9saWJzL2FwaUdhdGV3YXkudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS1yZWNvcmQvLi9zcmMvbWFpbi9saWJzL2FwaUdhdGV3YXkudHM/ZTExZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7IGJvZHk6IEZyb21TY2hlbWE8Uz4gfVxuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8VmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sIEFQSUdhdGV3YXlQcm94eVJlc3VsdD5cblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChyZXNwb25zZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/presentation/services/get-employee-dynamodb/get-employee-dynamodb.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/presentation/services/get-employee-dynamodb/get-employee-dynamodb.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetEmployeeDynamoDBService\": () => (/* binding */ GetEmployeeDynamoDBService)\n/* harmony export */ });\nclass GetEmployeeDynamoDBService {\n    constructor(db) {\n        this.db = db;\n    }\n    async execute(param) {\n        const paramsQuery = {\n            TableName: 'employeeTable',\n            KeyConditionExpression: \"#id = :id\",\n            ExpressionAttributeNames: {\n                \"#id\": \"id\"\n            },\n            ExpressionAttributeValues: {\n                \":id\": param.id\n            }\n        };\n        const employeeResult = await this.db.query(paramsQuery).promise();\n        console.log(employeeResult.Items);\n        const { id, name, age, role } = employeeResult.Items[0];\n        const employee = {\n            id,\n            name,\n            age,\n            role\n        };\n        return employee;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlc2VudGF0aW9uL3NlcnZpY2VzL2dldC1lbXBsb3llZS1keW5hbW9kYi9nZXQtZW1wbG95ZWUtZHluYW1vZGIuc2VydmljZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2VtcGxveWVlLXJlY29yZC8uL3NyYy9wcmVzZW50YXRpb24vc2VydmljZXMvZ2V0LWVtcGxveWVlLWR5bmFtb2RiL2dldC1lbXBsb3llZS1keW5hbW9kYi5zZXJ2aWNlLnRzP2ZiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wbG95ZWVNb2RlbCB9IGZyb20gJ3NyYy9kb21haW4vbW9kZWwvZW1wbG95ZWUnO1xuaW1wb3J0IHsgSUdldEVtcGxveWVlIH0gZnJvbSAnLi8uLi8uLi8uLi9kb21haW4vdXNlY2FzZXMvZ2V0LWVtcGxveWVlJztcblxuZXhwb3J0IGNsYXNzIEdldEVtcGxveWVlRHluYW1vREJTZXJ2aWNlIGltcGxlbWVudHMgSUdldEVtcGxveWVlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYjogQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50XG4gICkge31cbiBhc3luYyBleGVjdXRlIChwYXJhbTogSUdldEVtcGxveWVlLlBhcmFtKSB7XG4gIGNvbnN0IHBhcmFtc1F1ZXJ5ID0ge1xuICAgIFRhYmxlTmFtZSA6ICdlbXBsb3llZVRhYmxlJyxcbiAgICBLZXlDb25kaXRpb25FeHByZXNzaW9uOiBcIiNpZCA9IDppZFwiLFxuICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lczp7XG4gICAgICAgIFwiI2lkXCI6IFwiaWRcIlxuICAgIH0sXG4gICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuICAgICAgICBcIjppZFwiOiBwYXJhbS5pZFxuICAgIH1cbiAgfVxuICBjb25zdCBlbXBsb3llZVJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucXVlcnkocGFyYW1zUXVlcnkpLnByb21pc2UoKVxuICBjb25zb2xlLmxvZyhlbXBsb3llZVJlc3VsdC5JdGVtcylcbiAgY29uc3QgeyBpZCwgbmFtZSwgYWdlLCByb2xlfSA9IGVtcGxveWVlUmVzdWx0Lkl0ZW1zWzBdXG5cbiAgY29uc3QgZW1wbG95ZWU6IEVtcGxveWVlTW9kZWwgPSB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBhZ2UsXG4gICAgcm9sZVxuICB9XG4gIHJldHVybiBlbXBsb3llZVxuIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/presentation/services/get-employee-dynamodb/get-employee-dynamodb.service.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/functions/getEmployee/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;