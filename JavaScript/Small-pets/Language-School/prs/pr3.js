let firstMessage = 'START';
let trueMessage = 'Product purchased';
let falseMessage = 'Not enought money';
let lastMessage =  'Bye!';

let balance = 1300;

//=============================================

document.write(firstMessage);

const productPriceString1 = window.prompt('How much does first product price?')
const productPrice1 = window.Number(productPriceString1)

if (isNaN(productPrice1)) {
  document.write('<br><br>', 'Incorrect input of number ')
} else {
    if (productPrice1 <= balance) {
        document.write('<br><br>', trueMessage);
        balance -= productPrice1;
    } else {
        document.write('<br><br>', falseMessage);
    }
}

const productPriceString2 = window.prompt('How much does first product price?')
const productPrice2 = window.Number(productPriceString2)

if (!isNaN(productPrice2)) {
    if (productPrice2 <= balance) {
        document.write('<br><br>', trueMessage);
        balance -= productPrice2;
    } else {
        document.write('<br><br>', falseMessage);
    }
  } else {
    document.write('<br><br>', 'Incorrect input of number ')
  }

  

const productPriceString3 = window.prompt('How much does first product price?')
const productPrice3 = window.Number(productPriceString3)

if (isNaN(productPrice3)) {
    document.write('<br><br>', 'Incorrect input of number ')
  } else {
      if (productPrice3 <= balance) {
          document.write('<br><br>', trueMessage);
          balance -= productPrice3;
      } else {
          document.write('<br><br>', falseMessage);
      }
  }


document.write('<br><br>', 'Now you have ' + balance + ' on balance')
document.write('<br><br>', lastMessage);