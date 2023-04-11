function detection(){
    const cone="marketing, intern, assistance;";
    const sone="Administrative Assistant and Accounting, Fresher, No de.Js, .net core, BSA - SAP SS/PM";
    // const sone="No de.Js, .net core";
    // const regex = /([\w]+[\s]*[\w]+[\s\w]*)+/g;
    const regex = /([\.]*[\w]+[\s]*[\-\.\s\w]*[\/]*[\w]+[\s\w]*)+/g;
    const regex2= /^[\.][\w]+[\s]*[\w]*/g;//To find dot
    // /[\w]+[\s]*[\w]+/g;
    let container=[];
  
    //Delete special characters
    //Clean pattern detected
    let match;
    while ((match = regex.exec(sone)) !== null) {
        let depure;
        //Condition for dot
        if(match[0].match(regex2)){
            depure = match[0].replace(/([\.]+([\-]*[\/]*))/g, '');
            depure = "#dot"+depure;
            depure = depure.replace(/[\s]*/g, '');
            container.push(depure);
        }else{
            depure = match[0].replace(/([\.]*[\s]*)*/g, '');
            depure = depure.replace(/(([\-]*[\/]*))/g, '');
            container.push("#"+depure);
        }
    }
  
  console.log(container);
}
detection();