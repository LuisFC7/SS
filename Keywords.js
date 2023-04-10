// function detection(){
//     //First off all
//     //Divide de string in tokens by blank spaces
//     const cone="marketing, intern, assistance;"//This is one case
//     const sone="Administrative Assistant and Accounting, Fresher";
//     const firtsexpression=/[\w]+[\s]*[\w]+/;//Here we detect just the words without spaces at the beginning or final
//     let container=[];
//     //First count number 
//     if (firtsexpression.test(cone)) {
//         let aux=cone;
//         console.log(cone);
//       } else {
//         console.log('Match not found.');
//       }

// }

// detection();
function detection(){
    const cone="marketing, intern, assistance;";
    const sone="Administrative Assistant and Accounting, Fresher";
    const regex = /([\w]+[\s]*[\w]+[\s\w]*)+/g;
    // /[\w]+[\s]*[\w]+/g;
    let container=[];
  
    const matches = cone.match(regex); // Buscar coincidencias usando el método match
  
    // if (matches) {
    //   console.log(matches[0]); // Imprimir la primera coincidencia encontrada
    // } else {
    //   console.log('Match not found.');
    // }
    //Clean pattern detected
    let texto = "  Hola Mundo  ";
    let textoLimpio = texto.replace(/\s+/g, '');

    let match;
    while ((match = regex.exec(sone)) !== null) {
        let depure = match[0].replace(/\s+/g, '');
        container.push("#"+depure);
    }
  
  console.log(container);
}

  
detection();