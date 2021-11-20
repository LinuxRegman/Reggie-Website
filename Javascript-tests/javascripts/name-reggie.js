/**Reggi price test */

let regCost = (Math.floor( Math.random() * 5) +1);
let regCount = (Math.floor( Math.random() * 7) + 1);
let regDiscount = (Math.floor( Math.random() * 5));
let regBaseprice = (regCost * regCount);
let regPercentageCalc = (1 - ((regDiscount) / 10));
let regTotal = regBaseprice * regPercentageCalc;

document.write('<p> The price of reggis today is $' + regCost + ' per Reggie.');
document.write('<p>The reggie bulk shipment today comes with '+ regCount + ' Reggies which comes to a price of $' + regBaseprice + '.</p>')
document.write('<p>Todays discount is ' + (regDiscount * 10) + '% off, making your total cost $' + regTotal);

/**Test 1 */