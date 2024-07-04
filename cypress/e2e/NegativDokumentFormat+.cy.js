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
  } from "./Functoins.js";
import { clear } from 'console';
  
  
  // Использование функций generateRandomNumber и generateRandomExpression
  let randomExpression = generateRandomExpression(20);
  let randomNum = generateRandomNumber(100000000000, 999999999999);
  let randomNumSum = generateRandomNumber(10000000, 99999999);
  let randomNumLot = generateRandomNumber(10, 99);
  
  const SelectorDocumentButton1 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(0).siblings('input[type="file"]')
  }
  const SelectorDocumentButton2 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(1).siblings('input[type="file"]')
  }
  const SelectorDocumentButton3 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(2).siblings('input[type="file"]')
  }
  const SelectorDocumentButton4 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(3).siblings('input[type="file"]')
  }
  const SelectorDocumentButton5 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(4).siblings('input[type="file"]')
  }
  const SelectorDocumentButton6 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(5).siblings('input[type="file"]')
  }
  const SelectorDocumentButton7 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(6).siblings('input[type="file"]')
  }
  const SelectorDocumentButton8 = () => {
    return cy.get('[data-cy="button-upload-document-icons"]').eq(7).siblings('input[type="file"]')
  }

function ShowSelectorFile() {
  cy.get('input[type="file"]').invoke('attr', 'style', 'display', 'block')
  cy.get('input[type="file"]').should('be.visible')
}

describe("Автотесты", () => {

    

    it("Негатив загрузка документов не валидных форматов", () => {
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
        cy.fixture('example.epub', 'base64').then(fileContent => {
          let fileNameJPG = 'example.epub';  
          SelectorDocumentButton1().selectFile('cypress/fixtures/example.epub')
        
          cy.contains("Файл в поле Документ должен быть одного из следующих типов")
          cy.wait(2300)
        });
        ShowSelectorFile()
        cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
          let fileNamePNG = 'sample-3s.mp3';   
          SelectorDocumentButton1().selectFile('cypress/fixtures/sample-3s.mp3') 
        
          cy.contains("Файл в поле Документ должен быть одного из следующих типов")
          cy.wait(2300)
        });
        ShowSelectorFile()
        cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
          let fileNamePNG = 'sample-5s.mp4';   
          SelectorDocumentButton1().selectFile('cypress/fixtures/sample-5s.mp4') 
        
          cy.contains("Файл в поле Документ должен быть одного из следующих типов")
          cy.wait(2300)
        });
    
        ShowSelectorFile()
        cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
          let fileNamePNG = 'sample-animated-400x300.gif';   
          SelectorDocumentButton1().selectFile('cypress/fixtures/sample-animated-400x300.gif') 
        
          cy.contains("Файл в поле Документ должен быть одного из следующих типов")
          cy.wait(2300)
        });
    
        ShowSelectorFile()
        cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
          let fileNamePNG = 'sample-river-400x300.svg';   
          SelectorDocumentButton1().selectFile('cypress/fixtures/sample-river-400x300.svg') 
        
          cy.contains("Файл в поле Документ должен быть одного из следующих типов")
          cy.wait(2300)
        });
    //КОНЕЦ ОСТАНОВИСЬ!)
    ShowSelectorFile()
    cy.wait(2300)
    cy.fixture('example.epub', 'base64').then(fileContent => {
      let fileNameJPG = 'example.epub';  
      SelectorDocumentButton2().selectFile('cypress/fixtures/example.epub') 
    
      cy.contains("Файл в поле Документ должен быть одного из следующих типов")
      cy.wait(2300)
    });
    ShowSelectorFile()
    cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-3s.mp3';   
      SelectorDocumentButton2().selectFile('cypress/fixtures/sample-3s.mp3') 
    
      cy.contains("Файл в поле Документ должен быть одного из следующих типов")
      cy.wait(2300)
    });
    ShowSelectorFile()
    cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-5s.mp4';   
      SelectorDocumentButton2().selectFile('cypress/fixtures/sample-5s.mp4') 
    
      cy.contains("Файл в поле Документ должен быть одного из следующих типов")
      cy.wait(2300)
    });

    ShowSelectorFile()
    cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-animated-400x300.gif';   
      SelectorDocumentButton2().selectFile('cypress/fixtures/sample-animated-400x300.gif') 
    
      cy.contains("Файл в поле Документ должен быть одного из следующих типов")
      cy.wait(2300)
    });

    ShowSelectorFile()
    cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
      let fileNamePNG = 'sample-river-400x300.svg';   
      SelectorDocumentButton2().selectFile('cypress/fixtures/sample-river-400x300.svg') 
    
      cy.contains("Файл в поле Документ должен быть одного из следующих типов")
      cy.wait(2300)
    });
//КОНЕЦ ОСТАНОВИСЬ!)
ShowSelectorFile()
cy.wait(2300)
cy.fixture('example.epub', 'base64').then(fileContent => {
  let fileNameJPG = 'example.epub';  
  SelectorDocumentButton3().selectFile('cypress/fixtures/example.epub') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-3s.mp3';   
  SelectorDocumentButton3().selectFile('cypress/fixtures/sample-3s.mp3') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-5s.mp4';   
  SelectorDocumentButton3().selectFile('cypress/fixtures/sample-5s.mp4') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-animated-400x300.gif';   
  SelectorDocumentButton3().selectFile('cypress/fixtures/sample-animated-400x300.gif') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-river-400x300.svg';   
  SelectorDocumentButton3().selectFile('cypress/fixtures/sample-river-400x300.svg') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
//КОНЕЦ ОСТАНОВИСЬ!)

ShowSelectorFile()
cy.wait(2300)
cy.fixture('example.epub', 'base64').then(fileContent => {
  let fileNameJPG = 'example.epub';  
  SelectorDocumentButton4().selectFile('cypress/fixtures/example.epub') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-3s.mp3';   
  SelectorDocumentButton4().selectFile('cypress/fixtures/sample-3s.mp3') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-5s.mp4';   
  SelectorDocumentButton4().selectFile('cypress/fixtures/sample-5s.mp4') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-animated-400x300.gif';   
  SelectorDocumentButton4().selectFile('cypress/fixtures/sample-animated-400x300.gif') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-river-400x300.svg';   
  SelectorDocumentButton4().selectFile('cypress/fixtures/sample-river-400x300.svg') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
//КОНЕЦ ОСТАНОВИСЬ!)
       

ShowSelectorFile()
cy.wait(2300)
cy.fixture('example.epub', 'base64').then(fileContent => {
  let fileNameJPG = 'example.epub';  
  SelectorDocumentButton5().selectFile('cypress/fixtures/example.epub') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-3s.mp3';   
  SelectorDocumentButton5().selectFile('cypress/fixtures/sample-3s.mp3') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-5s.mp4';   
  SelectorDocumentButton5().selectFile('cypress/fixtures/sample-5s.mp4') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-animated-400x300.gif';   
  SelectorDocumentButton5().selectFile('cypress/fixtures/sample-animated-400x300.gif') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-river-400x300.svg';   
  SelectorDocumentButton5().selectFile('cypress/fixtures/sample-river-400x300.svg') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
//КОНЕЦ ОСТАНОВИСЬ!)

ShowSelectorFile()
cy.wait(2300)
cy.fixture('example.epub', 'base64').then(fileContent => {
  let fileNameJPG = 'example.epub';  
  SelectorDocumentButton6().selectFile('cypress/fixtures/example.epub') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-3s.mp3';   
  SelectorDocumentButton6().selectFile('cypress/fixtures/sample-3s.mp3') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-5s.mp4';   
  SelectorDocumentButton6().selectFile('cypress/fixtures/sample-5s.mp4') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-animated-400x300.gif';   
  SelectorDocumentButton6().selectFile('cypress/fixtures/sample-animated-400x300.gif') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-river-400x300.svg';   
  SelectorDocumentButton6().selectFile('cypress/fixtures/sample-river-400x300.svg') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
//КОНЕЦ ОСТАНОВИСЬ!)

ShowSelectorFile()
cy.wait(2300)
cy.fixture('example.epub', 'base64').then(fileContent => {
  let fileNameJPG = 'example.epub';  
  SelectorDocumentButton7().selectFile('cypress/fixtures/example.epub') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-3s.mp3';   
  SelectorDocumentButton7().selectFile('cypress/fixtures/sample-3s.mp3') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-5s.mp4';   
  SelectorDocumentButton7().selectFile('cypress/fixtures/sample-5s.mp4') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-animated-400x300.gif';   
  SelectorDocumentButton7().selectFile('cypress/fixtures/sample-animated-400x300.gif') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-river-400x300.svg';   
  SelectorDocumentButton7().selectFile('cypress/fixtures/sample-river-400x300.svg') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
//КОНЕЦ ОСТАНОВИСЬ!)

ShowSelectorFile()
cy.wait(2300)
cy.fixture('example.epub', 'base64').then(fileContent => {
  let fileNameJPG = 'example.epub';  
  SelectorDocumentButton8().selectFile('cypress/fixtures/example.epub') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-3s.mp3', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-3s.mp3';   
  SelectorDocumentButton8().selectFile('cypress/fixtures/sample-3s.mp3') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
ShowSelectorFile()
cy.fixture('sample-5s.mp4', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-5s.mp4';   
  SelectorDocumentButton8().selectFile('cypress/fixtures/sample-5s.mp4') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-animated-400x300.gif', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-animated-400x300.gif';   
  SelectorDocumentButton8().selectFile('cypress/fixtures/sample-animated-400x300.gif') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});

ShowSelectorFile()
cy.fixture('sample-river-400x300.svg', 'base64').then(fileContent => {
  let fileNamePNG = 'sample-river-400x300.svg';   
  SelectorDocumentButton8().selectFile('cypress/fixtures/sample-river-400x300.svg') 

  cy.contains("Файл в поле Документ должен быть одного из следующих типов")
  cy.wait(2300)
});
//КОНЕЦ ОСТАНОВИСЬ!)
        });
    
});
;

