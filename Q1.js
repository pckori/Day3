var object = [
    { person: "ABC", age: 21, company: "Guvi" },
    { person: "", age: 22, company: "Guvi1" },
    { person: "XYZ", age: 23, company: "Guvi2" },
  ];
//for loop
  for( var i=0;i<object.length;i++){
    console.log(`person: ${object[i].person}
                 age: ${object[i].age}`
                 );
  }

  //for in loop
  for(var i in object){
    console.log(`age: ${object[i].age}
                 company: ${object[i].company}`);
  }

  //for of loop
  for(let i of object){
    console.log(`person: ${i.person}
                 age: ${i.age}`)

  }

  //for each loop
  
 object.forEach((i) =>{
    console.log(`age: ${i.age}
                 company.${i.company}`)
  });