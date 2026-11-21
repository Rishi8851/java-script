// immediatelt invoked Function Expresion

// ; that is requred in iffi         


// named iffi
(function one () {console.log(`connectes`)  })();

(function sum(a,b) {console.log(a+b);})(2,3);

// unnamed iffi
((name) =>{
    console.log(`Db conected ${name}`);
})("rishs");
