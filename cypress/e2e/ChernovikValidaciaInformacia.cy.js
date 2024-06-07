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

    it("Позитив загрузка документов нужных форматов", () => {
      login();
      cy.get("a > .ant-btn").click();
      cy.get("#Aplication_inn").type("0259017788");
      cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
      cy.get(".ant-select-selector").click();
      cy.contains("Гарантийные обязательства").click();
      cy.get("#Aplication_fz > :nth-child(4)").click();
      cy.get("#Aplication_link").type(randomExpression);
      cy.get("#Aplication_subject_contract").type(randomExpression);
      cy.get("#Aplication_inn_customer").type(randomNum);
      cy.get("#Aplication_name_customer").type(randomExpression);
      cy.get("#Aplication_initial_price").type(randomNumSum);
      cy.get('#Aplication_total_sum').type(randomNumSum);
      cy.get('#Aplication_sum_avance').type(randomNumSum);
      cy.get('#Aplication_number_lot').type(randomNumLot)
      cy.get('#Aplication_sum_bg_obligation').type(
        getRandomDate("2024-01-01", "2029-12-31")
      );
      cy.get("#Aplication_finish_bg_at").type(
        getRandomDate("2025-01-01", "2999-12-31")
      );

      cy.contains('Создать заявку и загру').click().click();
      cy.wait(2000)

      cy.contains("Информация о").click()

      cy.get('#changeApplication_sum_bg').type("9999999999999")
      cy.contains("Сумма от 0 и до 100 млрд")
      cy.get('#changeApplication_sum_bg').clear().type("123")

      cy.get('#changeApplication_sum_bg_obligation').type("9999999999999")
      cy.contains("Сумма от 0 и до 100 млрд")
      cy.get('#changeApplication_sum_bg_obligation').clear().type("123")

      cy.get('#changeApplication_initial_price').type("9999999999999")
      cy.contains("Сумма от 0 и до 100 млрд")
      cy.get('#changeApplication_initial_price').clear().type("123")

      cy.get('#changeApplication_total_sum').type("9999999999999")
      cy.contains("Сумма от 0 и до 100 млрд")
      cy.get('#changeApplication_total_sum').clear().type("123")

      cy.get('#changeApplication_sum_avance').type("9999999999999")
      cy.contains("Сумма от 0 и до 100 млрд")
      cy.get('#changeApplication_sum_avance').clear().type("123")

      //Конец

      cy.get('#changeApplication_sum_bg').clear().type("-123")
      cy.contains("Информация о").click()
      cy.get('#changeApplication_sum_bg').should('have.value', '123')
      cy.get('#changeApplication_sum_bg').clear().type("123")

      cy.get('#changeApplication_sum_bg_obligation').clear().type("-234")
      cy.contains("Информация о").click()
      cy.get('#changeApplication_sum_bg_obligation').should('have.value', '234')
      cy.get('#changeApplication_sum_bg_obligation').clear().type("123")

      cy.get('#changeApplication_initial_price').clear().type("-345")
      cy.contains("Информация о").click()
      cy.get('#changeApplication_initial_price').should('have.value', '345')
      cy.get('#changeApplication_initial_price').clear().type("123")

      cy.get('#changeApplication_total_sum').clear().type("-456")
      cy.contains("Информация о").click()
      cy.get('#changeApplication_total_sum').should('have.value', '456')
      cy.get('#changeApplication_total_sum').clear().type("123")

      cy.get('#changeApplication_sum_avance').clear().type("-567")
      cy.contains("Информация о").click()
      cy.get('#changeApplication_sum_avance').should('have.value', '567')
      cy.get('#changeApplication_sum_avance').clear().type("123")

      //Конец

      cy.get('#changeApplication_sum_bg').clear()
      cy.get('#changeApplication_sum_bg').should('have.value', '0')
      cy.get('#changeApplication_sum_bg').clear().type("123")

      cy.get('#changeApplication_sum_bg_obligation').clear()
      cy.get('#changeApplication_sum_bg_obligation').should('have.value', '0')
      cy.get('#changeApplication_sum_bg_obligation').clear().type("123")

      cy.get('#changeApplication_initial_price').clear()
      cy.get('#changeApplication_initial_price').should('have.value', '0')
      cy.get('#changeApplication_initial_price').clear().type("123")

      cy.get('#changeApplication_total_sum').clear()
      cy.get('#changeApplication_total_sum').should('have.value', '0')
      cy.get('#changeApplication_total_sum').clear().type("123")

      cy.get('#changeApplication_sum_avance').clear()
      cy.get('#changeApplication_sum_avance').should('have.value', '0')
      cy.get('#changeApplication_sum_avance').clear().type("123")

      //Конец

      cy.get('#changeApplication_start_bg_at').type(
        getRandomDate("3000-01-01", "3100-12-31")
      );
      cy.get('#changeApplication_start_bg_at_help > .ant-form-item-explain-error').contains('Укажите дату не позднее сегодняшнего дня и не позже 3000 года.')
      cy.get('#changeApplication_start_bg_at').type(
        getRandomDate("2050-01-01", "2999-12-31")
      );
      
      cy.get('#changeApplication_finish_bg_at').type(
        getRandomDate("3000-01-01", "3100-12-31")
      );
      cy.get('.ant-form-item-explain-error').contains('Укажите дату не позднее сегодняшнего дня и не позже 3000 года.')
      cy.get('#changeApplication_finish_bg_at').type(
        getRandomDate("2050-01-01", "2999-12-31")
      );

    });
});
