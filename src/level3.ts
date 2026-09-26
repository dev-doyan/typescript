//making own type
type db= string|number;


let a:db="abc";
console.log(a);
a=2;                       //a can only hold string or number
                          // called type alias
console.log(a);


type status= "panding" |"done";
let work:status= "panding";
console.log(work);