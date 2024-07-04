import url, { mailAgent, passwordAgent, mailKO, passwordKO } from './Url.cy.js';

function generateRandomExpression(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomExpression = generateRandomExpression(20);
let randomNum = generateRandomNumber(100000000000, 999999999999);
let randomNumSum = generateRandomNumber(10000000, 99999999);
let randomNumLot = generateRandomNumber(1, 99);

// randomDate.js
const getRandomDate = (start = '10-01-2000', end = '01-01-2100') => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeDiff = endDate - startDate;
  const randomTime = Math.random() * timeDiff + startDate.getTime();
  return new Date(randomTime).toISOString().split('T')[0];
}

function ShowSelectorFile() {
  cy.get('input[type="file"]').invoke('attr', 'style', 'display', 'block')
  cy.get('input[type="file"]').should('be.visible')
}

function login() {
  cy.visit(url)
  cy.get('[data-cy="button-input-auth-email"]').type(mailAgent)
  cy.get('[data-cy="button-input-auth-password"]').type(passwordAgent)
  cy.get('[data-cy="button-input-auth-enter"]').click()
  cy.contains("Заявки")
  cy.contains('Создать заявку')
};

function loginKO() {
  cy.visit(url)
  cy.get('[data-cy="button-input-auth-email"]').type(mailKO)
  cy.get('[data-cy="button-input-auth-password"]').type(passwordKO)
  cy.get('[data-cy="button-input-auth-enter"]').click()
  cy.document().should('exist') // Проверяем наличие документа
  
      };

function CheckUchastie() {
  cy.contains("Ссылка на закупку(или план график)")
  cy.contains('Предмет контракта')
  cy.contains("ИНН Заказчика")
  cy.contains('Наименование организации')
  cy.contains("Начальная цена контракта")
  cy.contains('Сумма обеспечения на исполнение')
  cy.contains("Сумма аванса по контракту")
  cy.contains('Окончание подачи заявок')
  cy.contains("Сумма обеспечения")
  cy.contains('Номер лота')
  cy.contains("Дата начала бг")
  cy.contains('Дата окончания бг')
};
function CheckIspolnenieContrakta() {
  cy.contains("Ссылка на закупку(или план график)")
  cy.contains('Предмет контракта')
  cy.contains("ИНН Заказчика")
  cy.contains('Наименование организации')
  cy.contains("Начальная цена контракта")
  cy.contains('Итоговая цена контракта')
  cy.contains("Сумма аванса по контракту")
  cy.contains('Дата проведения аукциона')
  cy.contains("Сумма обеспечения")
  cy.contains('Номер лота')
  cy.contains("Дата начала бг")
  cy.contains('Дата окончания бг')
};

function CheckVozvratAvanca() {
  cy.contains("Ссылка на закупку(или план график)")
  cy.contains('Предмет контракта')
  cy.contains("ИНН Заказчика")
  cy.contains('Наименование организации')
  cy.contains("Начальная цена контракта")
  cy.contains('Итоговая цена контракта')
  cy.contains("Сумма аванса по контракту")
  cy.contains('Дата проведения аукциона')
  cy.contains("Сумма обеспечения")
  cy.contains('Номер лота')
  cy.contains("Дата начала бг")
  cy.contains('Дата окончания бг')
};

function CheckGarantiynieObjazatelstva() {
  cy.contains("Ссылка на закупку(или план график)")
  cy.contains('Предмет контракта')
  cy.contains("ИНН Заказчика")
  cy.contains('Наименование организации')
  cy.contains("Начальная цена контракта")
  cy.contains('Итоговая цена контракта')
  cy.contains("Сумма аванса по контракту")
  cy.contains("Сумма обеспечения")
  cy.contains('Номер лота')
  cy.contains("Дата начала бг")
  cy.contains('Дата окончания бг')
};

function CheckGarantiynieObjazatelstvaNovaya() {
  cy.contains("Ссылка на закупку(или план график)")
  cy.contains('Предмет контракта')
  cy.contains("ИНН Заказчика")
  cy.contains('Наименование организации')
  cy.contains("Начальная цена контракта")
  cy.contains('Итоговая цена контракта')
  cy.contains("Сумма аванса по контракту")
  cy.contains("Сумма обеспечения")
  cy.contains('Номер лота')
  cy.contains("Дата начала бг")
  cy.contains('Дата окончания бг')
};

function CreateApplicaton() {
  cy.wait(1000)
  cy.contains('Создать заявку и загру').click().click();
  cy.wait(2000)
  cy.contains('Необходимые док').click();
  cy.wait(1000)
  ShowSelectorFile()
  cy.wait(1000)
  cy.fixture('example.jpg', 'base64').then(fileContent => {
    const fileName = 'example.jpg';   
    cy.get('[data-cy="button-upload-document-icons"]').eq(0).siblings('input[type="file"]').selectFile('cypress/fixtures/example.jpg')
    cy.get('input[type="file"]').invoke('attr', 'style', 'display', 'none');
    cy.wait(2000)
    cy.reload();
    cy.contains("Сохранить и отправить в работу").click()
  });
}

function handleException(err, runnable) {
  
  if (err.message.includes('Ошибка при инициализации модуля для работы с Cades plugin')) {
 
      return false;
  }

  return true;
}

Cypress.on('uncaught:exception', handleException);

module.exports = {
  getRandomDate,
  handleException
};

module.exports = {
  generateRandomNumber,
  generateRandomExpression,
  getRandomDate,
  login,
  CheckUchastie,
  CheckIspolnenieContrakta,
  CheckVozvratAvanca,
  CreateApplicaton,
  CheckGarantiynieObjazatelstva,
  CheckGarantiynieObjazatelstvaNovaya,
  ShowSelectorFile,
  loginKO

};