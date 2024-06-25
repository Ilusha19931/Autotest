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
  

  // Использование функций generateRandomNumber и generateRandomExpression
  let randomExpression = generateRandomExpression(20);
  let randomNum = generateRandomNumber(100000000000, 999999999999);
  let randomNumSum = generateRandomNumber(10000000, 99999999);
  let randomNumLot = generateRandomNumber(10, 99);

  describe("Автотесты", () => {

    it("Переходы Кредитный отдела", () => {
      loginKO();

      cy.get('.anticon-user').click()
      cy.contains("Профиль").click()
      cy.contains("Личная информация")
      cy.contains("ФИО")
      cy.contains("Почтовый адрес")

      cy.get('.ant-menu-item-group-list > .ant-menu-item > .ant-menu-title-content > a').click()
      cy.contains("Заявки")
      cy.contains("Тип БГ")
      cy.contains("Банки")
      cy.contains("Дата создания")

      cy.contains("Список Агентов").click()
      cy.contains("Список агентов")
      cy.contains("Список Агентов")

      cy.get('.ant-menu-item-group-list > .ant-menu-item > .ant-menu-title-content > a').click()
      cy.contains("Заявки")
      cy.contains("Тип БГ")
      cy.contains("Банки")
      cy.contains("Дата создания")

      cy.contains("Список Агентов").click()
      cy.get('.PageListAgent_cardWrapper__3P-dd > :nth-child(2)').click()

    });

        it.only("Изменение статусов", () => {
          login()
          cy.get("a > .ant-btn").click();
      cy.get("#Aplication_inn").type("0259017788");
      cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
      cy.get(".ant-select-selector").click();
      cy.contains("Участие").click();
      cy.get("#Aplication_fz > :nth-child(2)").click();
      cy.get("#Aplication_purchase_number").type(randomNum);
      cy.wait(5000);
      cy.get('#Aplication_ikz').click().type(randomNum).type(randomNum).type(randomNum)
      cy.get("#Aplication_link").type(randomExpression);
      cy.get("#Aplication_subject_contract").type(randomExpression);
      cy.get("#Aplication_inn_customer").type(randomNum);
      cy.get("#Aplication_name_customer").type(randomExpression);
      cy.get("#Aplication_initial_price").type(randomNumSum);
      cy.get("#Aplication_sum_avance").type(randomNumSum);
      cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
      cy.get("#Aplication_sum_bg").type(randomNumSum);
      cy.get('#Aplication_number_lot').type(randomNumLot)
      cy.get("#Aplication_purchase_end_at").type(
        getRandomDate("2024-01-01", "2029-12-31")
      );
      cy.get("#Aplication_finish_bg_at").type(
        getRandomDate("2025-01-01", "2999-12-31")
      );
      CreateApplicaton()
      cy.get('.anticon-user').click()
      cy.contains("Выход").click()
      cy.wait(1000)

          loginKO();
          cy.get(':nth-child(1) > div > div >.ant-row').eq(3).click()
          cy.contains("Взять в работу").click()
          cy.get('.ant-btn-primary').click()
          cy.get('.ant-tag').should('contain', 'В работе');

          cy.contains("Отказ банка").click()
          cy.get('.ant-btn-primary').click()
          cy.get('.ant-tag').should('contain', 'Отказано банком');

          cy.contains("Вернуть на доработку").click()
          cy.get('.ant-btn-primary').click()
          cy.get('.ant-tag').should('contain', 'На доработку');

          cy.contains("Взять в работу").click()
          cy.get('.ant-btn-primary').click()
          cy.get('.ant-tag').should('contain', 'В работе');

          cy.contains("Выпустить заявку").click()
          cy.get('.ant-btn-primary').click()
          cy.get('.ant-tag').should('contain', 'Выпущена');

          cy.contains("Взять в работу").click()
          cy.get('.ant-btn-primary').click()
          cy.get('.ant-tag').should('contain', 'В работе');

          cy.contains("Прикрепить Банки").click();
          cy.get(".ant-checkbox-input").check("1");
          cy.get(".ant-checkbox-input").check("11");
          cy.get(".ant-checkbox-input").check("12");
          cy.get(".ant-checkbox-input").check("19");
          cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > [tabindex="-1"] > .ant-modal-content > .ant-modal-footer > .ant-btn-primary').click()

          cy.get('.ApplicationCard_moduleTitleCardWrapper__CVUU4 > :nth-child(5)').click()

          cy.get(':nth-child(1) > .ApplicationBankInfo_bankInfoWrapper__B3UZ0 > .ApplicationBankInfo_bankInfoStatus__MWylR > .anticon-down > svg').click()
          cy.get('.ant-select-selector').click()
          cy.contains("Предложение").click()
          cy.get('.CollapseContent_containerTwoItems__cYVLG > .ant-btn').click()

          cy.get(':nth-child(1) > .ApplicationBankInfo_bankInfoWrapper__B3UZ0 > .ApplicationBankInfo_bankInfoStatus__MWylR > .anticon-down > svg').click()
          cy.wait(1000)
          cy.get('#form_ApplicationBank11 > .CollapseContent_formWrapper__Zc6Au > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
          cy.contains("Выдана").click()
          cy.wait(1000)
          cy.get(':nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .CollapseContent_containerTwoItems__cYVLG > .ant-btn > span').click()
          cy.contains('Выдана')
          cy.contains('Успешно')


    });
});
