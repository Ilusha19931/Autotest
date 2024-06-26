import url, { mailAgent, passwordAgent, mailKO, passwordKO } from './Url.cy.js';

import {
    generateRandomNumber,
    generateRandomExpression,
    getRandomDate,
    loginKO,
    login,
    CheckUchastie,
    CheckIspolnenieContrakta,
    CheckVozvratAvanca,
    CreateApplicaton,
    CheckGarantiynieObjazatelstva,
    DocumentsDifferentTypes,
    handleException
  } from "./Functoins";
import { clear } from 'console';


// Использование функций generateRandomNumber и generateRandomExpression
let randomExpression = generateRandomExpression(20);
let randomNum = generateRandomNumber(100000000000, 999999999999);
let randomNumSum = generateRandomNumber(10000000, 99999999);
let randomNumLot = generateRandomNumber(10, 99);

describe("Автотесты", () => {

  it("Гарантийные обязательства, без подгрузки, 185-фз", () => {
    loginKO();
    cy.on('uncaught:exception', (err, runnable) => {
      // Проверяем, является ли данная ошибка Assertion Error и если да, игнорируем ее
      if (err.message.includes('Expected to find content:')) {
          return false;
      }
  });
  
  cy.get(':nth-child(1) > div > div >.ant-row').eq(3).click();
  
  cy.get('body').then(($body) => {
      if ($body.find("Взять в работу").length > 0) {
          cy.contains("Взять в работу").click();
          cy.get('.ant-btn-primary').click();
      } else {
          cy.log("Элемент 'Взять в работу' не найден на странице.");
      }
  });
    cy.contains('Банки').click()
    cy.get('#search_search').clear()
    cy.get('[class*="anticon anticon-down"]').first().click()
    cy.get('.ant-select-selection-item').click()
    cy.get('.ant-select-dropdown').contains('Предложение').click()
    cy.contains("Сохранить изменения").click()
    cy.get('[class*="anticon anticon-down"]').last().click()
    cy.get('#form_ApplicationBank11_base_commission').type("qwer")
    cy.get('#form_ApplicationBank11_overstatement').click()
    cy.get('#form_ApplicationBank11_base_commission').should('have.value', '0').type("15")
    cy.get('#form_ApplicationBank11_overstatement').click()
    cy.get('#form_ApplicationBank11_base_commission').should('have.value', '15').clear().type("-15")
    cy.get('#form_ApplicationBank11_overstatement').click()
    cy.get('#form_ApplicationBank11_base_commission').should('have.value', '15').clear().type("15йцук")
    cy.get('#form_ApplicationBank11_overstatement').click()
    cy.get('#form_ApplicationBank11_base_commission').should('have.value', '15').clear().type("15@#$")
    cy.get('#form_ApplicationBank11_overstatement').click()
    cy.get('#form_ApplicationBank11_base_commission').should('have.value', '15').clear()

    cy.get('#form_ApplicationBank11_overstatement').type("qwer")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_overstatement').should('have.value', '0').type("15")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_overstatement').should('have.value', '15').clear().type("-15")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_overstatement').should('have.value', '15').clear().type("15йцук")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_overstatement').should('have.value', '15').clear().type("15@#$")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_overstatement').should('have.value', '15').clear()

    cy.get('#form_ApplicationBank11_platform_app_id').type("qwer")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_platform_app_id').should('have.value', '0qwer').clear().type("15")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_platform_app_id').should('have.value', '15').clear().type("-15")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_platform_app_id').should('have.value', '-15').clear().type("15йцук")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_platform_app_id').should('have.value', '15йцук').clear().type("15@#$")
    cy.get('#form_ApplicationBank11_base_commission').click()
    cy.get('#form_ApplicationBank11_platform_app_id').should('have.value', '15@#$').clear()

  });
});
