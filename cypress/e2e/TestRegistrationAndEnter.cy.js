import url from "./Url.cy";

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

describe("Автотесты", () => {
  it("Позитивный вход Логин+ пароль +", () => {
    cy.visit(url);
    cy.get("#basic_email").type("mzokov_il@mail.ru");
    cy.get("#basic_password").type("12341234йЙ");
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Заявки");
    cy.contains("Создать заявку");
  });
  it("Негативный пустой Имейл", () => {
    cy.visit(url);
    cy.get("#basic_password").type("12341234йЙ");
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный Имейл заполнен не по форме", () => {
    cy.visit(url);
    cy.get("#basic_email").type("йцукеее");
    cy.get("#basic_password").type("12341234йЙ");
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Введите корректый Email");
  });
  it("Негативный вход Логин+ пароль -", () => {
    cy.visit(url);
    cy.get("#basic_email").type("mzokov_il@mail.ru");
    cy.get("#basic_password").type("1234123йЙ");
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Email или пароль введены неправильно");
  });
  it("Негативный вход Логин- пароль +", () => {
    cy.visit(url);
    cy.get("#basic_email").type("zokov_il@mail.ru");
    cy.get("#basic_password").type("12341234йЙ");
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Email или пароль введены неправильно");
  });
  it("Негативный регистрация, существующий имейл", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Такое значение поля email уже существует.");
  });
  it("Негативный регистрация, пустая фамилия", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный регистрация, пустое имя", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный регистрация, пустой ИНН", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный регистрация, пустой телефон", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный регистрация, пустой имейл", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный регистрация, без повторения пароля", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Т");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
  });
  it("Негативный регистрация, фамилия меньше 2", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Т");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Фамилия пользователя не должна быть меньше 2 символов");
  });
  it("Негативный регистрация, без пароля", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Т");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Обязательное поле");
    cy.contains("Пароль должен содержать хотя бы одну цифру.");
  });
  it("Негативный регистрация, фамилия больше 25", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type(
      "ТестоТестоТестоТестоТестоТесто"
    );
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Фамилия пользователя не должна быть больше 25 символов");
  });
  it.only("Негативный регистрация, имя больше 25", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_name").type("ТестоТестоТестоТестоТестоТесто");
    cy.get("#AgentPageEntityLegally_surname").type("Тесто");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Имя пользователя не должно быть больше 25 символов");
  });
  it("Негативный регистрация, имя меньше 2", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Т");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Имя пользователя не должно быть меньше 2 символов");
  });
  it("Негативный регистрация, ИНН не корректный", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("66040226");
    cy.get("#AgentPageEntityLegally_phone_number").type("87696667567");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Введите существующий ИНН");
  });
  it("Негативный регистрация, телефон 9", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("876966688");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains(
      "Количество символов в поле Номер телефона должно быть не меньше 10."
    );
  });
  it("Негативный регистрация, телефон 14", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("12345678901234");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Введите действующий телефонный номер");
  });
  it("Негативный регистрация, цифры в фамилии", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый12");
    cy.get("#AgentPageEntityLegally_name").type("Кен");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("123456789012");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Пожалуйста, введите только буквы");
  });
  it("Негативный регистрация, цифры в имени", () => {
    cy.visit(url);
    cy.get("#basic > .ant-btn-default > span").click();
    cy.get("#AgentPageEntityLegally_surname").type("Тестовый");
    cy.get("#AgentPageEntityLegally_name").type("Кен12");
    cy.get("#AgentPageEntityLegally_patronymic").type("Тестовый");
    cy.get("#AgentPageEntityLegally_inn").type("6604024326");
    cy.get("#AgentPageEntityLegally_phone_number").type("123456789012");
    cy.get("#AgentPageEntityLegally_email").type("mzokov_il@mail.ru");
    cy.get("#AgentPageEntityLegally_password").type("12341234qQ");
    cy.get("#AgentPageEntityLegally_password_confirmation").type("12341234qQ");
    cy.get(".ant-checkbox-input").click();
    cy.get(".ant-btn-primary > span").click();
    cy.contains("Пожалуйста, введите только буквы");
  });
});
