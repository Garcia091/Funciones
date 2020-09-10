function tablasMultiplicar(num){
 let base = num;
 let data = '';

 for (let i=0; i<=10; i++){
   data += `${ base } * ${ i } = ${ base * i} \n`
 }

 const fs = require('fs'); 

//Silvia
exports.tablasMultiplicar = tablasMultiplicar;
