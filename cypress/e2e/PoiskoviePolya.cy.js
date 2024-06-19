import url, { mail, password } from './Url.cy.js';

import {
    generateRandomNumber,
    generateRandomExpression,
    getRandomDate,
    login,
    CheckUchastie,
    CheckIspolnenieContrakta,
    CheckVozvratAvanca,
    CreateApplicaton,
    CheckGarantiynieObjazatelstva,
    DocumentsDifferentTypes,
    handleException
  } from "./Functoins";
  

  // Использование функций generateRandomNumber и generateRandomExpression
  let randomExpression = generateRandomExpression(20);
  let randomNum = generateRandomNumber(100000000000, 999999999999);
  let randomNumSum = generateRandomNumber(10000000, 99999999);
  let randomNumLot = generateRandomNumber(10, 99);

  describe("Автотесты", () => {

    it("Позитив поиск по типу БГ", () => {
      login();
      cy.get('#filter_applications_bg_type_id').click()
      cy.get('.rc-virtual-list-holder-inner').find('.ant-select-item-option').contains('Участие').click();
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('БГ Участие')
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains("Создана")
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('Сумма БГ')

      cy.wait(1000)

      cy.get(':nth-child(3) > .ant-btn').click()
      cy.wait(1000)
      cy.get('#filter_applications_bg_type_id').click()
      cy.get('.rc-virtual-list-holder-inner').find('.ant-select-item-option').contains('Гарантийные обязательства').click();
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('БГ Гарантийные обязательства')
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains("Создана")
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('Сумма БГ')
      cy.wait(1000)

      cy.get(':nth-child(3) > .ant-btn').click()
      cy.wait(1000)
      cy.get('#filter_applications_bg_type_id').click()
      cy.get('.rc-virtual-list-holder-inner').find('.ant-select-item-option').contains('Возврат аванса').click(); 
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('БГ Возврат аванса')
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains("Создана")
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('Сумма БГ')
      cy.wait(1000)

      cy.get(':nth-child(3) > .ant-btn').click()
      cy.wait(1000)
      cy.get('#filter_applications_bg_type_id').click()
      cy.get('.rc-virtual-list-holder-inner').find('.ant-select-item-option').contains('Исполнения контракта').click();  
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('БГ Исполнения контракта')
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains("Создана")
      cy.get(':nth-child(1) > .ApplicationCard_cardWrapper__i0ElQ').contains('Сумма БГ')
    });

      it("Позитив поиск по типу Банку", () => {
        login();
        cy.get('#filter_applications_bank_id').click().type('Камк')
        cy.contains("Камком").click()
        cy.get('.ant-select-selection-item').contains("Камкомбанк")
        cy.wait(1000)
        cy.get(':nth-child(3) > .ant-btn').click()
        cy.wait(1000)

        cy.get('#filter_applications_bank_id').click().type('Пром')
        cy.contains("Промс").click()
        cy.get('.ant-select-selection-item').contains("Промсвязь")
        cy.wait(1000)
        cy.get(':nth-child(3) > .ant-btn').click()
        cy.wait(1000)
        
        cy.get('#filter_applications_bank_id').click().type('Пром')
        cy.contains("Промс").click()
        cy.get('.ant-select-selection-item').contains("Промсвязь")
        cy.wait(1000)
        cy.get(':nth-child(3) > .ant-btn').click()
        cy.wait(1000)

      });

      it("Позитив поиск по типу Банку", () => {
        login();
        cy.get('#filter_applications_organization_inn').click().type('0259017788')

        cy.wait(1000)
        cy.get(':nth-child(3) > .ant-btn').click()
        cy.wait(1000)


      });

      it.only("Позитив поиск по типу Номеру заявки", () => {
        login();
        cy.get('#filter_applications_organization_inn').click().type('0259017788')

        cy.wait(1000)
        cy.get(':nth-child(3) > .ant-btn').click()
        cy.wait(1000)


      });
    });

