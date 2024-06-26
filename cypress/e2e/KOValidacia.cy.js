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

    it("Переходы Кредитный отдела", () => {
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
    cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]').contains('Чат').click()
    cy.get('#form_FooterChat_chatInputText').click().invoke('val', 'йцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщзхйцукенгшщ');
    cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
    cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should('contain', 'йцукенгшщйцукенгшщ')

    cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]').contains('Чат').click()
    cy.get('#form_FooterChat_chatInputText').click().type('йб');
    cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
    cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should('contain', 'йб')

    cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]').contains('Чат').click()
    cy.get('#form_FooterChat_chatInputText').click()
    cy.url().then(originalUrl => {
      cy.get('[class*="FooterChat_footerChatButtonMessage"] >.ant-btn').click();
      cy.url().should('eq', originalUrl);

      cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]').contains('Чат').click()
      cy.get('#form_FooterChat_chatInputText').click().type('@$%}}');
      cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
      cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should('contain', '@$%}}')

      cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]').contains('Чат').click()
      cy.get('#form_FooterChat_chatInputText').click().type('שלום');
      cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
      cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should('contain', 'שלום')

      cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]').contains('Чат').click()
      cy.get('#form_FooterChat_chatInputText').click().type('qwerqwer');
      cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
      cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should('contain', 'qwerqwer')

      cy.contains('Банки').click()
      cy.get('#search_search').type("Зе")
      cy.contains('Зенит')
      cy.get('#search_search').clear()
      cy.get('#search_search').type("Банк")
      cy.contains('Ингосстрах')
      cy.get('#search_search').clear()
      cy.contains('Банки').click()
      cy.get('#search_search').type("Зе")
      cy.contains('Зенит')
      cy.get('#search_search').clear()
      cy.get('#search_search').type("АК")
      cy.contains('АК БАРС')

      cy.get('#search_search').clear()
      cy.get('#search_search').type("2@@")
      cy.contains('Ничего не найдено')
      cy.get('#search_search').clear()
      cy.get('#search_search').type("qwer")
      cy.contains('Ничего не найдено')

      cy.get('[class*="UI_ITOModuleTitleCard_cardWrapper"]').contains('Банки').click()
      cy.get('#search_search').clear()
      cy.get('[class*="ApplicationBankInfo_bankInfoWrapper"]').click()

        });    
      })
    });
