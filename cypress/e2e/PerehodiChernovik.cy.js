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
    DocumentsDifferentTypes
  } from "./Functoins";
  
  
  // Использование функций generateRandomNumber и generateRandomExpression
  let randomExpression = generateRandomExpression(20);
  let randomNum = generateRandomNumber(100000000000, 999999999999);
  let randomNumSum = generateRandomNumber(10000000, 99999999);
  let randomNumLot = generateRandomNumber(10, 99);

  describe("Автотесты", () => {

        it("Гарантийные обязательства, подгрузка, 44-фз", () => {
            login();
            cy.get("a > .ant-btn").click();
            cy.get("#Aplication_inn").type("0259017788");
            cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
            cy.get(".ant-select-selector").click();
            cy.contains("Гарантийные обязательства").click();
            cy.get("#Aplication_fz > :nth-child(1)").click();
            cy.get("#Aplication_purchase_number").type("0161300011124000142");
            cy.wait(5000);
            cy.get("#Aplication_sum_avance").type(randomNumSum)
            cy.get("#Aplication_finish_bg_at").type(
              getRandomDate("2025-01-01", "2999-12-31")
            );
            cy.get('#Aplication_number_lot').type(randomNumLot)
      cy.get('#Aplication_sum_bg_obligation').type(
        getRandomDate("2024-01-01", "2029-12-31")
      );
      cy.get("#Aplication_finish_bg_at").type(
        getRandomDate("2025-01-01", "2999-12-31")
      );

      cy.contains('Создать заявку и загру').click().click();
      cy.wait(2000)
      cy.contains('Предмет контракта')
      cy.contains('Дата проведения аукциона')
      cy.contains('Окончание подачи заявок')
      cy.contains('Необходимые доку').click()
      cy.contains('Протокол или решение об избрании единоличнного исполнительного органа')
      cy.contains('Паспорт')
      cy.contains("Чат").click()
      cy.get('.RightSideTitle_title__qMA-H').contains('Чат')
    });
});

