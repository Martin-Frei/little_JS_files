



let text = "Please locate where 'locate' occurs! indexOf";
let index = text.indexOf("locate");
point1 = document.getElementById('point1');
point1.innerHTML = `
    <h3> 
        ${text} <br/>
        ${index} 
    </h3>
`;
let text2 = "Please locate where 'locate' occurs!  lastIndexOf";
let index2 = text2.lastIndexOf("locate");
point2 = document.getElementById('point2');
point2.innerHTML = `
    <h3> 
        ${text2} <br/>
        ${index2} 
    </h3>
`;

let text3 = "Please locate where 'locate' occurs!  lastIndexOf with Startparamenter";
let index3 = text3.lastIndexOf("locate", 15);
point3 = document.getElementById('point3');
point3.innerHTML = `
    <h3> 
        ${text3} <br/>
        ${index3} 
    </h3>
`;

let text4 = "Please locate where 'locate' occurs! indexOf with Startparameter";
let index4 = text4.indexOf("locate", 15);
point4 = document.getElementById('point4');
point4.innerHTML = `
    <h3> 
        ${text4} <br/>
        ${index4} 
    </h3>
`;

let text5 = "Please locate where 'locate' occurs! search ";
let index5 = text5.search("locate");
point5 = document.getElementById('point5');
point5.innerHTML = `
    <h3> 
        ${text5} <br/>
        ${index5} 
    </h3>
`;
let text6 = `The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:
    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).`;

let point6 = document.getElementById('point5');
point6.innerHTML = `
    <h3> 
        ${text6.replace(/\n/g, "<br/>")} 
    </h3>
`;

let text7 = "The rain in SPAIN stays mainly in the plain // match('ain')";
let index7 = text7.match("ain");
point5 = document.getElementById('point7');
point5.innerHTML = `
    <h3> 
        ${text7} <br/>
        ${index7}
    </h3>
`;


let text8 = "The rain in SPAIN stays mainly in the plain // match(/ain/g) (RegEy  global match, case sensitive)";
let index8 = text8.match(/ain/g);
point5 = document.getElementById('point8');
point5.innerHTML = `
    <h3> 
        ${text8} <br/>
        ${index8}
    </h3>
`;

let text9 = "The rain in SPAIN stays mainly in the plain //  match(/ain/gi) ( RegEx  global match, not case sensitive)";
let index9 = text9.match(/ain/gi);
point5 = document.getElementById('point9');
point5.innerHTML = `
    <h3> 
        ${text9} <br/>
        ${index9}
    </h3>
`;

let text10 = "I love cats. Cats are very easy to love. Cats are very popular. // matchAll with /Cats/g  (RegEx)"
let index10 = text10.matchAll(/Cats/g);
point10 = document.getElementById('point10');
point10.innerHTML = `
    <h3> 
        ${text10} <br/>
        ${Array.from(index10)}
    </h3>
`;

let text11 = "I love cats. Cats are very easy to love. Cats are very popular. // matchAll with /Cats/gi  (RegEx)"
let index11 = text11.matchAll(/Cats/gi);
point11 = document.getElementById('point11');
point11.innerHTML = `
    <h3> 
        ${text11} <br/>
        ${Array.from(index11)}
    </h3>
`;


let text12 = 'Hello world, welcome to the universe . // Includes("world") ??';
let index12 = text12.includes("world")
point12 = document.getElementById("point12");
point12.innerHTML = `
    <h3> 
        ${text12} <br/>
        ${index12}
    </h3>
`;

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
point13 = document.getElementById("point13");
point13.innerHTML = `
    <h3> 
        Operation inside the a String with Variables <br/>
        Price: ${price} <br/>
        VAT:   ${VAT}<br/>
        ${total}
    </h3>
`;
