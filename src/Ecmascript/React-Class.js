const tableauMot = ['yo','happy','how are you','hey','HappyKid'];
const findLongestWord =(tab)=>
  {
    let tableau = tab.map((value)=>({mot:value,longueur:value.length}))
    let longObject = tableau.reduce(
        (a,b)=>a.longueur > b.longueur  ? a : b
        );
    console.log(`${longObject.mot} : ${longObject.longueur}`)  ;  
  };

findLongestWord(tableauMot);

/////////////////////////////////////

const input = [
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g","a"]
];
const Compter = (tab)=>
{
    let flattedtable = tab.flat();
    let Occurence = flattedtable.reduce((a,b)=>//a = object , b= l value that is going to be checked each time
       { a[b] = a[b] ? a[b] + 1 : 1;
        return a;
       },{}// bch yebda mn object feragh
    );
    //test de de a each time
    // { a: 1 }
    // { a: 1, b: 1 }
    // { a: 1, b: 1, c: 1 }
    // { a: 1, b: 1, c: 2 }
    // { a: 1, b: 1, c: 2, d: 1 }
    // { a: 1, b: 1, c: 2, d: 1, f: 1 }
    // { a: 1, b: 1, c: 2, d: 2, f: 1 }
    // { a: 1, b: 1, c: 2, d: 2, f: 2 }
    // { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
    // { a: 2, b: 1, c: 2, d: 2, f: 2, g: 1 }
    // { a: 2, b: 1, c: 2, d: 2, f: 2, g: 1 }
    console.log(Occurence)

};

Compter(input)

//////////////////////////////////////////////


const Calculate = [
    {name:'jhon',id:123,marks:98},
    {name:'baba',id:100,marks:23},
    {name:'jhon',id:200,marks:45},
    {name:'jack',id:115,marks:75}
]

const total = (tab) => {
    let tableau = tab.map((value)=>(value.marks<50 ? value.marks+=15 : value.marks)
    ).filter((value)=>value>50)
    .reduce((a,b)=>a+b)
   console.log(tableau)
}
total(Calculate);


///////////////////////////////////////////////


const Tab = []

const ADD = (tab) => {
 tab.push(...input,...Calculate)
 let tableau = tab.map((value, index) => ({...value, ID: index + 1}));
 return tableau;
}
let tabBig= ADD(Tab);
console.log(tabBig)



//////////////////////////////////////////////


import search from './fonction.js';
search(tabBig,5);
