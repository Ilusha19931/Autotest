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
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );
    cy.get('#Aplication_number_lot').type(randomNumLot)
    CheckGarantiynieObjazatelstva()
    // CreateApplicaton()
    // CheckGarantiynieObjazatelstvaNovaya()
   
  }); 
});
