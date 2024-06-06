import {
  generateRandomNumber,
  generateRandomExpression,
  getRandomDate,
  login,

} from "./Functoins";

// Использование функций generateRandomNumber и generateRandomExpression
let randomExpression = generateRandomExpression(20);
let randomNum = generateRandomNumber(100000000000, 999999999999);
let randomNumSum = generateRandomNumber(10000000, 99999999);
let randomNumLot = generateRandomNumber(10, 99);

describe("Автотесты", () => {
  it("Позитивный Заявка 223ФЗ Участие", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);

    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );
    cy.get(".BankSelection_BankSelectionFooter__CvMYH > .ant-btn").click();
    cy.get(".ant-checkbox-input").check("1");
    cy.get(".ant-checkbox-input").check("11");
    cy.get(".ant-checkbox-input").check("12");
    cy.get(".ant-checkbox-input").check("19");
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
    cy.contains("Создание заявки");
    cy.contains("Система налогообложения");
    cy.contains("Закупка");
    cy.contains("Тип гарантии и закупка");
    cy.contains("Тип банковской гарантии");
    cy.contains("Номер закупки");
    cy.contains("Ссылка на закупку(или план график)");
    cy.contains("Предмет контракта");
    cy.contains("ИНН Заказчика");
    cy.contains("Наименование организации");
    cy.contains("Начальная цена контракта");
    cy.contains("Сумма обеспечения на исполнение");
    cy.contains("Сумма аванса по контракту");
    cy.contains("Аукцион");
    cy.contains("Окончание подачи заявок");
    cy.contains("Сумма обеспечения");
    cy.contains("Номер лота");
    cy.contains("Дата начала бг");
    cy.contains("Дата окончания бг");
    cy.contains("Предпочтения по отправке в банки");
  });
  //внести клик по кнопке создать заявку и проверки внутри ввести
  it("Позитивный ИНН не подгружается", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017111");
    cy.contains("не существует");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("не существует");
  });
  it("Негативный ИНН с спецсимволом", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("025901711№?**");
    cy.contains("не существует");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("не существует");
    cy.contains("Введите существующий ИНН");
  });
  it("Негативный ИНН с пробелом внутри", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("025901  11");
    cy.contains("не существует");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("не существует");
    cy.contains("Введите существующий ИНН");
  });
  it("Негативный ИНН с русскими буквами", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("02590йцу11");
    cy.contains("не существует");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("не существует");
    cy.contains("Введите существующий ИНН");
  });
  it("Негативный ИНН с английскими буквами", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("02590er111");
    cy.contains("не существует");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("не существует");
    cy.contains("Введите существующий ИНН");
  });
  it("Негативный ИНН 100 символов", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type(
      "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
    );
    cy.contains("не существует");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("не существует");
    cy.contains("Введите существующий ИНН");
  });
  it("Проверка прокликивания Типа налогооблажения и типа ФЗ", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();

    cy.get("#Aplication_is_tax_simple > :nth-child(1)")
      .find('input[type="radio"]')
      .should("be.checked");

    cy.get("#Aplication_is_tax_simple > :nth-child(2)")
      .find('input[type="radio"]')
      .should("not.be.checked");

    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();

    cy.get("#Aplication_is_tax_simple > :nth-child(2)")
      .find('input[type="radio"]')
      .should("be.checked");

    cy.get("#Aplication_is_tax_simple > :nth-child(1)")
      .find('input[type="radio"]')
      .should("not.be.checked");

    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_fz > :nth-child(1)")
      .find('input[type="radio"]')
      .should("be.checked");

    cy.get("#Aplication_fz > :nth-child(2)").click();

    cy.get("#Aplication_fz > :nth-child(2)")
      .find('input[type="radio"]')
      .should("be.checked");

    cy.get("#Aplication_fz > :nth-child(3)").click();

    cy.get("#Aplication_fz > :nth-child(3)")
      .find('input[type="radio"]')
      .should("be.checked");

    cy.get("#Aplication_fz > :nth-child(4)").click();

    cy.get("#Aplication_fz > :nth-child(4)")
      .find('input[type="radio"]')
      .should("be.checked");
  });
  it("Позитивная проверка перемены типа БГ", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.contains("Исполнения контракта");
    cy.get(".ant-select-selection-item").click();
    cy.contains("Возврат аванса").click();
    cy.contains("Возврат аванса");
    cy.get(".ant-select-selection-item").click();
    cy.contains("Гарантийные обязательства").click();
    cy.contains("Гарантийные обязательства");
  });
  it("Позитивная проверка на сущесвующий номер заявок", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.get("#Aplication_purchase_number").type("0120300018923000050");

    cy.contains(
      "Выполнение работ по ремонту автомобильной дороги на о. Русском на участках: от остановки общественного транспорта «Ворошиловская батарея» в сторону поселка «Экипажный» протяженностью 1,4 км; от пос. Экипажный до пос. КЭТ протяженностью 0,9 км Владивостокского городского округа"
    );
    cy.get("#Aplication_inn_customer").should("have.value", "2538128932");
    cy.contains("УПРАВЛЕНИЕ ДОРОГ АДМИНИСТРАЦИИ ГОРОДА ВЛАДИВОСТОКА");
    cy.get("#Aplication_initial_price").should("have.value", "210 526 315.79");
  });

  it("Негативные проверки номера завяки с цифрами, пробелами и несущесвтующей заявкой", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.get("#Aplication_purchase_number").type("01203000  923000050");
    cy.wait(500)
    cy.contains("Запись не найдена");

    cy.reload(true);

    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.get("#Aplication_purchase_number").type("01203000qw923000050");
    cy.contains("Запись не найдена");

    cy.reload(true);

    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.get("#Aplication_purchase_number").type("0125500055923000050");
    cy.contains("Запись не найдена");

    cy.reload(true);

    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.get("#Aplication_purchase_number").type("0125500055йц3000050");
    cy.contains("Номер закупки надо проверить");

    cy.reload(true);

    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get("#Aplication_fz > :nth-child(1) > :nth-child(2)").click();
    cy.get("#Aplication_bg_type_id").click();
    cy.contains("Исполнения контракта").click();
    cy.get("#Aplication_purchase_number").type("0120300018923000050");

    cy.wait(10000);

    cy.get("#Aplication_purchase_number").type(
      "0120300018923000050012030001892300005001203000189230000500120300018923000050"
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Длина значения цифрового поля Номер закупки должна быть между 11 и 19"
    );
  });
  it("Негативный поле ИКЗ(только 44ФЗ и 185ФЗ(опционально))", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(2)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);

    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );
    cy.get("#Aplication_ikz").type("233253812qw3225360100100750014211244");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Значение поля ИКЗ должно быть числом.");
    cy.get("#Aplication_ikz").clear();
    cy.wait(5000);

    cy.get("#Aplication_ikz").type("233253812йц3225360100100750014211244");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Значение поля ИКЗ должно быть числом.");
    cy.get("#Aplication_ikz").clear();
    cy.wait(5000);

    cy.get("#Aplication_ikz").type("233253812  3225360100100750014211244");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Значение поля ИКЗ должно быть числом.");
    cy.get("#Aplication_ikz").clear();
    cy.wait(5000);

    cy.get("#Aplication_ikz").type("2332538123225360100100750014211244");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Длина значения цифрового поля ИКЗ должна быть 36.");
    cy.get("#Aplication_ikz").clear();
    cy.wait(5000);

    cy.get("#Aplication_ikz").type("233253812#%3225360100100750014211244");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Значение поля ИКЗ должно быть числом.");
    cy.get("#Aplication_ikz").clear();
    cy.wait(5000);
  });
  it("Негативный поле Ссылка на закупку(или план график))", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.writeFile(
      "2000+.txt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum"
    );
    cy.get("#Aplication_link").click();
    cy.get("#Aplication_link").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum"
    );
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Количество символов в поле Ссылка на закупку не может превышать 2000."
    );

    cy.get("#Aplication_link").clear();
    cy.get("#Aplication_link").type("1");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Количество символов в поле Ссылка на закупку должно быть не меньше 5."
    );
  });

  it("Негативный поле Предмет контракта", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_subject_contract").clear();
    cy.get("#Aplication_subject_contract").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum"
    );
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Количество символов в поле Предмет контракта не может превышать 2000."
    );
    cy.wait(5000);

    cy.get("#Aplication_subject_contract").clear();
    cy.get("#Aplication_subject_contract").type("1");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Количество символов в поле Предмет контракта должно быть не меньше 5."
    );
    cy.wait(5000);
  });

  it("Негативный поле ИНН Заказчика", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("1234123412341234");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Введите существующий ИНН");

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("1");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Введите существующий ИНН");

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("12341234123й4");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Введите существующий ИНН");

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("12341234123 4");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Введите существующий ИНН");

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("12341234123q4");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Введите существующий ИНН");

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("1234123412#@4");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Введите существующий ИНН");

    cy.get("#Aplication_inn_customer").clear();
    cy.get("#Aplication_inn_customer").type("0259017788");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("ИНН заказчика не должно совпадать с инн клиента");
  });

  it("Негативный поле Наименование организации", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(1)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_name_customer").clear();
    cy.get("#Aplication_name_customer").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum"
    );
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Количество символов в поле Наименование организации не может превышать 2000."
    );

    cy.get("#Aplication_name_customer").clear();
    cy.get("#Aplication_name_customer").type("1");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains(
      "Количество символов в поле Наименование организации должно быть не меньше 5."
    );
  });

  it("Негативный поле начальная цена контракта", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_initial_price").click().clear().type("9000000000000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_initial_price").click().clear().type("-90000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_initial_price").click().clear().type("123йцук");
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_initial_price").should("have.value", "123");

    cy.get("#Aplication_initial_price").click().clear().type("123qwer");
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_initial_price").should("have.value", "123");

    cy.get("#Aplication_initial_price").click().clear().type("123+1234");
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_initial_price").should("have.value", "123");

    cy.get("#Aplication_initial_price").click().clear();
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_initial_price").should("have.value", "0");
  });

  it("Негативный поле Сумма обеспечения(Участие)", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_sum_bg_execution")
      .click()
      .clear()
      .type("9000000000000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_sum_bg_execution").click().clear().type("-90000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_sum_bg_execution").click().clear().type("123йцук");
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_sum_bg_execution").should("have.value", "123");

    cy.get("#Aplication_sum_bg_execution").click().clear().type("123qwer");
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_sum_bg_execution").should("have.value", "123");

    cy.get("#Aplication_sum_bg_execution").click().clear().type("123+1234");
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_sum_bg_execution").should("have.value", "123");

    cy.get("#Aplication_sum_bg_execution").click().clear();
    cy.get("#Aplication_sum_avance").click();
    cy.get("#Aplication_sum_bg_execution").should("have.value", "0");
  });

  it("Негативный поле Сумма аванса по контракту(Участие)", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_sum_avance").click().clear().type("9000000000000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_sum_avance").click().clear().type("-90000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_sum_avance").click().clear().type("123йцук");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_avance").should("have.value", "123");

    cy.get("#Aplication_sum_avance").click().clear().type("123qwer");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_avance").should("have.value", "123");

    cy.get("#Aplication_sum_avance").click().clear().type("123+1234");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_avance").should("have.value", "123");

    cy.get("#Aplication_sum_avance").click().clear();
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_avance").should("have.value", "0");
  });

  it("Негативный поле Сумма обеспечения(Участие)", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_number_lot").type(randomNumLot);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_sum_bg").click().clear().type("9000000000000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_sum_bg").click().clear().type("-90000");
    cy.contains("Сумма от 0 и до 100 млрд");

    cy.get("#Aplication_sum_bg").click().clear().type("123йцук");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_bg").should("have.value", "123");

    cy.get("#Aplication_sum_bg").click().clear().type("123qwer");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_bg").should("have.value", "123");

    cy.get("#Aplication_sum_bg").click().clear().type("123+1234");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_bg").should("have.value", "123");

    cy.get("#Aplication_sum_bg").click().clear();
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_sum_bg").should("have.value", "0");
  });

  it("Негативный поле Номер Лота", () => {
    login();
    cy.get("a > .ant-btn").click();
    cy.get("#Aplication_inn").type("0259017788");
    cy.get("#Aplication_is_tax_simple > :nth-child(2)").click();
    cy.get(".ant-select-selector").click();
    cy.contains("Участие").click();
    cy.get("#Aplication_fz > :nth-child(1)").click();
    cy.get("#Aplication_purchase_number").type(randomNum);
    cy.wait(5000);
    cy.get("#Aplication_link").type(randomExpression);
    cy.get("#Aplication_subject_contract").type(randomExpression);
    cy.get("#Aplication_inn_customer").type(randomNum);
    cy.get("#Aplication_name_customer").type(randomExpression);
    cy.get("#Aplication_initial_price").type(randomNumSum);
    cy.get("#Aplication_sum_avance").type(randomNumSum);
    cy.get("#Aplication_sum_bg_execution").type(randomNumSum);
    cy.get("#Aplication_sum_bg").type(randomNumSum);
    cy.get("#Aplication_purchase_end_at").type(
      getRandomDate("2024-01-01", "2029-12-31")
    );
    cy.get("#Aplication_finish_bg_at").type(
      getRandomDate("2025-01-01", "2999-12-31")
    );

    cy.get("#Aplication_number_lot").click().clear().type("9999");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Значение поля Номер лота должно быть между 0 и 999.");

    cy.get("#Aplication_number_lot").click().clear().type("-99");
    cy.contains("Создать заявку и загрузить документы").click();
    cy.contains("Значение поля Номер лота должно быть между 0 и 999.");

    cy.get("#Aplication_number_lot").click().clear().type("99йцук");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_number_lot").should("have.value", "99");

    cy.get("#Aplication_number_lot").click().clear().type("99qwer");
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication_number_lot").should("have.value", "99");

    cy.get("#Aplication_number_lot").click().clear();
    cy.get("#Aplication_initial_price").click();
    cy.get("#Aplication > :nth-child(14)").should(
      "contain.text",
      "Обязательное поле"
    );
  });
});
