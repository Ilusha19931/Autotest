describe("Автотесты", () => {
  it("Регистрация позитив", () => {
    cy.visit("https://testsimfront.tatbg.ru");
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("123456789012");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234йЙ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234йЙ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Письмо подтверждения было отправлено на вашу почту");
    cy.contains("Письмо отправлено");
  });
  it("Позитивный вход Логин+ пароль +", () => {
    cy.visit("https://testsimfront.tatbg.ru");
    cy.get("#basic_email").type("mzokov_il@mail.ru");
    cy.get("#basic_password").type("12341234йЙ");
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Чтобы продолжить работу в системе Вам необходимо подтвердить");
  });
});
