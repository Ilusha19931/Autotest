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
  
  const SelectorDocumentButtom1 = ":nth-child(1) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom2 = ":nth-child(2) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom3 = ":nth-child(3) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom4 = ":nth-child(4) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom5 = ":nth-child(5) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom6 = ":nth-child(6) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom7 = ":nth-child(7) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 
const SelectorDocumentButtom8 = ":nth-child(8) > .UI_ITOModuleDocuments_iconWrapper__HvS-s > .DocRequestList_iconWrapper__Bp2qh > .ant-upload-wrapper > .ant-upload-select > .ant-upload > input" 

function ShowSelectorFile() {
  cy.get('input[type="file"]').invoke('attr', 'style', 'display', 'block')
  cy.get('input[type="file"]').should('be.visible')
}

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
      CheckGarantiynieObjazatelstva()
      DocumentsDifferentTypes()
      
    });

    it.only("Негати загрузка документов не валидных форматов", () => {
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
        cy.wait(1000)
        cy.contains('Создать заявку и загру').click().click();
        cy.wait(2000)
        cy.contains('Необходимые док').click();
        cy.wait(1000)
        ShowSelectorFile()
        cy.wait(1000)
        cy.fixture('example.jpg', 'base64').then(fileContent => {
          let fileNameJPG = 'example.jpg';  
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example.jpg') 
        
          cy.contains("example.jpg")
          cy.wait(1500)
        });
        ShowSelectorFile()
        cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
          let fileNamePNG = 'example_multipage.docx';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example_multipage.docx') 
        
          cy.contains("Файл")
          cy.wait(1500)
        });
        ShowSelectorFile()
        cy.fixture('example (1).docx', 'base64').then(fileContent => {
          let fileNamePNG = 'example (1).docx';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example (1).docx') 
        
          cy.contains("example (1).docx")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example_alpha.png', 'base64').then(fileContent => {
          let fileNamePNG = 'example_alpha.png';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example_alpha.png') 
        
          cy.contains("example_alpha.png")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
          let fileNamePNG = 'example_alpha.png';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example_layers_small.tif') 
        
          cy.contains("example_layers_small.tif")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
          let fileNamePNG = 'example_multicontent.zip';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example_multicontent.zip') 
        
          cy.contains("example_multicontent.zip")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
          let fileNamePNG = 'example_multipage.odt';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example_multipage.odt') 
        
          cy.contains("example_multipage.odt")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
          let fileNamePNG = 'example_with_audio.pdf';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example_with_audio.pdf') 
        
          cy.contains("example_with_audio.pdf")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example.doc', 'base64').then(fileContent => {
          let fileNamePNG = 'example.doc';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example.doc') 
        
          cy.contains("example.doc")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example.jpeg', 'base64').then(fileContent => {
          let fileNamePNG = 'example.jpeg';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example.jpeg') 
        
          cy.contains("example.jpeg")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example.rar', 'base64').then(fileContent => {
          let fileNamePNG = 'example.rar';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example.rar') 
        
          cy.contains("example.rar")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example.tiff', 'base64').then(fileContent => {
          let fileNamePNG = 'example.tiff';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example.tiff') 
        
          cy.contains("example.tiff")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('example.xlsx', 'base64').then(fileContent => {
          let fileNamePNG = 'example.xlsx';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/example.xlsx') 
        
          cy.contains("example.xlsx")
          cy.wait(1500)
        });
    
        ShowSelectorFile()
        cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
          let fileNamePNG = 'sample-empty.xls';   
          cy.get(SelectorDocumentButtom1).selectFile('cypress/fixtures/sample-empty.xls') 
        
          cy.contains("sample-empty.xls")
          cy.wait(1500)
        });
    //КОНЕЦ ОСТАНОВИСЬ!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example.jpg')
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom2).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
    //КОНЕЦ ОСТАНОВИСЬ!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';  
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example.jpg') 
    
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom3).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
    //КОНЕЦ ОСТАНОВИСЬ!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example.jpg')
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom4).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
    //КОНЕЦ ОСТАНОВИСЬ, ЗЛОБНЫЙ ШАМАН!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example.jpg')
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom5).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
    //КОНЕЦ ОСТАНОВИСЬ!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example.jpg')
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom6).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
    //КОНЕЦ ОСТАНОВИСЬ!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example.jpg')
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom7).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
    //КОНЕЦ ОСТАНОВИСЬ!)
    
    ShowSelectorFile()
    cy.wait(1000)
    cy.fixture('example.jpg', 'base64').then(fileContent => {
      let fileNameJPG = 'example.jpg';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example.jpg')
      cy.contains("example.jpg")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example_multipage.docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.docx';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example_multipage.docx') 
    
      cy.contains("Файл")
      cy.wait(1500)
    });
    ShowSelectorFile()
    cy.fixture('example (1).docx', 'base64').then(fileContent => {
      let fileNamePNG = 'example (1).docx';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example (1).docx') 
    
      cy.contains("example (1).docx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_alpha.png', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example_alpha.png') 
    
      cy.contains("example_alpha.png")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_layers_small.tif', 'base64').then(fileContent => {
      let fileNamePNG = 'example_alpha.png';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example_layers_small.tif') 
    
      cy.contains("example_layers_small.tif")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multicontent.zip', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multicontent.zip';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example_multicontent.zip') 
    
      cy.contains("example_multicontent.zip")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_multipage.odt', 'base64').then(fileContent => {
      let fileNamePNG = 'example_multipage.odt';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example_multipage.odt') 
    
      cy.contains("example_multipage.odt")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example_with_audio.pdf', 'base64').then(fileContent => {
      let fileNamePNG = 'example_with_audio.pdf';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example_with_audio.pdf') 
    
      cy.contains("example_with_audio.pdf")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.doc', 'base64').then(fileContent => {
      let fileNamePNG = 'example.doc';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example.doc') 
    
      cy.contains("example.doc")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.jpeg', 'base64').then(fileContent => {
      let fileNamePNG = 'example.jpeg';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example.jpeg') 
    
      cy.contains("example.jpeg")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.rar', 'base64').then(fileContent => {
      let fileNamePNG = 'example.rar';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example.rar') 
    
      cy.contains("example.rar")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.tiff', 'base64').then(fileContent => {
      let fileNamePNG = 'example.tiff';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example.tiff') 
    
      cy.contains("example.tiff")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('example.xlsx', 'base64').then(fileContent => {
      let fileNamePNG = 'example.xlsx';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/example.xlsx') 
    
      cy.contains("example.xlsx")
      cy.wait(1500)
    });
    
    ShowSelectorFile()
    cy.fixture('sample-empty.xls', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-empty.xls';   
      cy.get(SelectorDocumentButtom8).selectFile('cypress/fixtures/sample-empty.xls') 
    
      cy.contains("sample-empty.xls")
      cy.wait(1500)
    });
        
      });
  });
  