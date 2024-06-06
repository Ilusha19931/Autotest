import {
  generateRandomNumber,
  generateRandomExpression,
  getRandomDate,
  login,
  CheckUchastie,
  CheckIspolnenieContrakta,
  CheckVozvratAvanca,
  CreateApplicaton,
  CheckGarantiynieObjazatelstva
} from "./Functoins";


// Использование функций generateRandomNumber и generateRandomExpression
let randomExpression = generateRandomExpression(20);
let randomNum = generateRandomNumber(100000000000, 999999999999);
let randomNumSum = generateRandomNumber(10000000, 99999999);
let randomNumLot = generateRandomNumber(10, 99);

describe("Автотесты", () => {

  it("Гарантийные обязательства, без подгрузки, 185-фз", () => {
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
    CheckGarantiynieObjazatelstva()
    CreateApplicaton()
  });
});
