import url, { mailAgent, passwordAgent, mailKO, passwordKO } from "./Url.cy.js";

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
  handleExceptionА,
} from "./Functoins";
import { clear } from "console";

// Использование функций generateRandomNumber и generateRandomExpression
let randomExpression = generateRandomExpression(20);
let randomNum = generateRandomNumber(100000000000, 999999999999);
let randomNumSum = generateRandomNumber(10000000, 99999999);
let randomNumLot = generateRandomNumber(10, 99);

describe("Автотесты", () => {
  it("Валидация КО новая заявка", () => {
    loginKO();
    cy.on("uncaught:exception", (err, runnable) => {
      // Проверяем, является ли данная ошибка Assertion Error и если да, игнорируем ее
      if (err.message.includes("Expected to find content:")) {
        return false;
      }
    });

    cy.get(":nth-child(1) > div > div >.ant-row").eq(3).click();

    cy.get("body").then(($body) => {
      if ($body.find("Взять в работу").length > 0) {
        cy.contains("Взять в работу").click();
        cy.get(".ant-btn-primary").click();
      } else {
        cy.log("Элемент 'Взять в работу' не найден на странице.");
      }
    });
    cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]')
      .contains("Чат")
      .click();
    cy.get("#form_FooterChat_chatInputText")
      .click()
      .type("йцукенгшщйцукенгшщйцукенгшщйцукенгшщйцукенгшщйцукенгшщ");
    cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
    cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should(
      "contain",
      "йцукенгшщйцукенгшщ"
    );

    cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]')
      .contains("Чат")
      .click();
    cy.get("#form_FooterChat_chatInputText").click().type("йб");
    cy.get('[class*="FooterChat_footerChatButtonMessage"] > .ant-btn').click();
    cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should(
      "contain",
      "йб"
    );

    cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]')
      .contains("Чат")
      .click();
    cy.get("#form_FooterChat_chatInputText").click();
    cy.url().then((originalUrl) => {
      cy.get('[class*="FooterChat_footerChatButtonMessage"] >.ant-btn').click();
      cy.url().should("eq", originalUrl);

      cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]')
        .contains("Чат")
        .click();
      cy.get("#form_FooterChat_chatInputText").click().type("@$%}}");
      cy.get(
        '[class*="FooterChat_footerChatButtonMessage"] > .ant-btn'
      ).click();
      cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should(
        "contain",
        "@$%}}"
      );

      cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]')
        .contains("Чат")
        .click();
      cy.get("#form_FooterChat_chatInputText").click().type("שלום");
      cy.get(
        '[class*="FooterChat_footerChatButtonMessage"] > .ant-btn'
      ).click();
      cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should(
        "contain",
        "שלום"
      );

      cy.get('[class*="ApplicationCard_moduleTitleCardWrapper"]')
        .contains("Чат")
        .click();
      cy.get("#form_FooterChat_chatInputText").click().type("qwerqwer");
      cy.get(
        '[class*="FooterChat_footerChatButtonMessage"] > .ant-btn'
      ).click();
      cy.get('[class*="MessageCardChat_wrapperMessageCardChatMe"]').should(
        "contain",
        "qwerqwer"
      );

      cy.contains("Банки").click();
      cy.get("#search_search").type("Зе");
      cy.contains("Зенит");
      cy.get("#search_search").clear();
      cy.get("#search_search").type("Банк");
      cy.contains("Ингосстрах");
      cy.get("#search_search").clear();
      cy.contains("Банки").click();
      cy.get("#search_search").type("Зе");
      cy.contains("Зенит");
      cy.get("#search_search").clear();
      cy.get("#search_search").type("АК");
      cy.contains("АК БАРС");

      cy.get("#search_search").clear();
      cy.get("#search_search").type("2@@");
      cy.contains("Ничего не найдено");
      cy.get("#search_search").clear();
      cy.get("#search_search").first().type("qwer");
      cy.contains("Ничего не найдено");

      cy.get("#search_search").clear();
      cy.get('[class*="anticon anticon-down"]').first().click();
      cy.get(".ant-select-selection-item").click();
      cy.get(".ant-select-dropdown").contains("Предложение").click();
      cy.contains("Сохранить изменения").click();
      cy.get('[class*="anticon anticon-down"]').last().click();

      cy.get('[id*="base_commission"]').first().type("qwer");
      cy.get('[id*="overstatement"]').first().click();
      cy.get('[id*="base_commission"]')
        .first()
        .should("have.value", "0")
        .type("15");
      cy.get('[id*="overstatement"]').first().click();
      cy.get('[id*="base_commission"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("-15");
      cy.get('[id*="overstatement"]').first().click();
      cy.get('[id*="base_commission"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("15йцук");
      cy.get('[id*="overstatement"]').first().click();
      cy.get('[id*="base_commission"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("15@#$");
      cy.get('[id*="overstatement"]').first().click();
      cy.get('[id*="base_commission"]')
        .first()
        .should("have.value", "15")
        .clear();

      cy.get('[id*="overstatement"]').first().type("qwer");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="overstatement"]')
        .first()
        .should("have.value", "0")
        .type("15");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="overstatement"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("-15");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="overstatement"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("15йцук");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="overstatement"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("15@#$");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="overstatement"]')
        .first()
        .should("have.value", "15")
        .clear();

      cy.get('[id*="platform_app_id"]').first().type("qwer");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="platform_app_id"]')
        .first()
        .should("have.value", "0qwer")
        .clear()
        .type("15");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="platform_app_id"]')
        .first()
        .should("have.value", "15")
        .clear()
        .type("-15");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="platform_app_id"]')
        .first()
        .should("have.value", "-15")
        .clear()
        .type("15йцук");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="platform_app_id"]')
        .first()
        .should("have.value", "15йцук")
        .clear()
        .type("15@#$");
      cy.get('[id*="base_commission"]').first().click();
      cy.get('[id*="platform_app_id"]')
        .first()
        .should("have.value", "15@#$")
        .clear();
    });
  });
});
