const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});

	//Creating a new range with startLine, startCharacter & endLine, endCharacter.
	let range = new vscode.Range(0, 0, vscode.window.activeTextEditor.document.lineCount, 0);

	let validatedRange = vscode.window.activeTextEditor.document.validateRange(range);

	test('Sample test 2', () => {
		vscode.window.activeTextEditor.edit(editBuilder => {
			editBuilder.replace(validatedRange,
			'{"Name":"RESPONSE","Message":"{/"CorrelationToken/":/"22868a7a-6350-46d1-baea-733050ae3f9e/",/"Functionality/":/"P2M.Integrations.TMS.ISO.LoyaltyDiscountQueryShop/",/"DateTime/":/"2022-02-22T08:14:38.1355881Z/",/"ContentType/":/"application/json; charset=utf-8/",/"ContentEncoding/":/"/",/"ContentLength/":2284,/"StatusCode/":200,/"ResponseDateTime/":/"2022-02-22T08:14:38.1355881Z/",/"ResponseUri/":/https://qa-external-scp.repsol.everiscloudpayments.com/tms-iso/api/v1/payments/loyaltyDiscountQuery/waylet/shop/,/"Content/":/"{///"associatedDiscountAndLoyalty///":{///"loyalty///":null,///"discounts///":[{///"discountCard///":{///"trackTwo///":null,///"encryptMethod///":0,///"pan///":///"************0004///",///"initializationVector///":null,///"cardId///":///"RM///",///"discountType///":///"RM///"},///"discountsBySaleProduct///":[{///"product///":{///"product///":{///"productId///":///"093///",///"unitPrice///":0.0},///"quantity///":0.0,///"totalPrice///":30.0},///"promoCode///":///"TR03///",///"promoText///":///"REPSOL MAS VISA OTROS PRODT.///",///"appliedDiscount///":1.5,///"reimbursedDiscount///":0.75}],///"totalDiscount///":1.5}]},///"transactionId///":36,///"queryDate///":///"2022-02-22T09:14:36+00:00///",///"allowedMarksTable///":///"SSSSSSSSSSSSSSSSSSSS///",///"promoTickets///":[{///"footTicketPromos///":[{///"text///":///" Le informamos que ///",///"fontType///":1},{///"text///":///" los descuentos de su tarjeta ///",///"fontType///":1},{///"text///":///" Repsol Más no son acumulables ///",///"fontType///":1},{///"text///":///" a otros descuentos asociados ///",///"fontType///":1},{///"text///":///" a medios de pago del Grupo Repsol ///",///"fontType///":1},{///"text///":///" y promociones especiales en Estaciones ///",///"fontType///":1},{///"text///":///" de Servicio salvo indicación en contra.///",///"fontType///":1},{///"text///":///" Consulte compatibilidades en ///",///"fontType///":1},{///"text///":///" www.repsolmas.repsol.com ///",///"fontType///":1}],///"footPromoType///":3,///"barcode///":null,///"barcodeNumber///":///"///"}],///"queryExecutedCorrectly///":true,///"errorMessages///":null,///"hcpDataForTicket///":{///"terminalData///":{///"id///":202,///"terminalType///":4,///"description///":///"QA LAB///",///"terminalNumber///":2,///"turnNumber///":///"01///",///"turnDateTime///":///"2022-02-22T08:46:55+00:00///",///"shop///":{///"id///":///"183133529///",///"licenseNumber///":null,///"address///":///"CR N-332, PK. 72,40 MI///",///"postalCode///":///"03140///",///"province///":///"ALICANTE///",///"locality///":///"GUARDAMAR DE SEGURA///",///"stationCode///":1,///"countryCode///":724,///"remittanceNumber///":///"72///",///"accountingRemittanceDate///":///"2022-02-22T00:00:00+00:00///",///"commerceName///":///"EXPOGAS SL///",///"commerceCompanyName///":///"EXPOGAS, S.L.///",///"timeZoneId///":///"Romance Standard Time///",///"enable///":true,///"shopType///":1,///"partitionKey///":183133529},///"countryData///":{///"id///":///"724///",///"countryName///":///"Spain///",///"acquirerId///":///"000220///",///"currencyCode///":978,///"partitionKey///":0},///"operationNumber///":1},///"transactionDateTime///":///"2022-02-22T09:14:36+00:00///",///"transactionId///":36,///"authorizationNumber///":///"668697///",///"referenceNumber///":///"///",///"responseRemittanceNumber///":///"72///",///"responseRemittanceDate///":///"2022-02-22T00:00:00+00:00///",///"responseTurnNumber///":///"01///",///"responseTurnDate///":///"2022-02-22T08:46:55+00:00///"}}/"}","MessageType":0}');
		})
	});
});