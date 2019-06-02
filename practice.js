/*
const a=[1,2,3,4,5]
const b=[...a,6,7,8]
//console.log(b);

const obj1={ "name":"Nik",
            "last name":"Phut" }

//console.log(obj1["last name"]);

const obj2=[{name:"Vijit",
             last_name:"Moo"},
            {name:"Mee",
             last_name:"MeeMee"}
           ]
const objA=[obj1,obj2]
const objB=[obj1,...obj2]
//console.log(objA);
//console.log(objB);

const makeObject=(args)=>{
    const obj1={ "name":"Nik",
            "last name":"Phut" }
    return [obj1,...args]
}
//console.log(makeObject(obj2));

const person=[
    {name:"Nikhom", age:41,sex:"male"},
    {name:"Moo", age:30,sex:"female"},
    {name:"Peter", age:35,sex:"male"},
    {name:"Sudoku", age:12,sex:"female"}
  ]

//person.forEach((a)=>{console.log(a);})

const oldPerson=person.filter(p=>p.age>18)
//console.log(oldPerson);

const malePerson=person.filter(p=>p.sex==="male")
//console.log(malePerson);

const notMalePerson=person.filter(p=>p.sex!=="male")
//console.log(notMalePerson);

const personName=person.map((p)=>{
    return `${p.name} is a good person`
})
//console.log(personName);

let sortPerson=person.sort((p1,p2)=>{
    if(p1.age>p2.age){
      return 1;
    }else{
      return -1
    }
  })
//console.log(sortPerson)  

sortPerson=person.sort((a,b)=>(a.age>b.age ? 1 : -1));
//console.log(sortPerson)

const sortPersonUp=person.sort((a,b)=>a.age-b.age);
//console.log(sortPersonUp)
const sortPersonDown=person.sort((a,b)=>b.age-a.age);
//console.log(sortPersonDown)



const ageSum=person.reduce((total,p)=>total+p.age,0);
//console.log(ageSum);

const combine=person.map(p=>p.age*2).filter(p=>p>50).sort((a,b)=>b-a).reduce((total,a)=>total+a,0);
//console.log(combine);

*/
//====================================
/*
const car={
  brand:'Ford Ranger',
  color:'red'
}

console.log(car.color);
console.log(car['color']);
const ptname='color';
console.log(car[ptname]);
*/
/*
const menu={
  burger:10,
  fries:3,
  beer:5
}

getPrice=(men,itm)=>{
  const itemPrice=men[itm];
  return itemPrice
}

console.log(menu['beer']);
console.log(getPrice(menu,'beer'))
*/

/*
const menu=[
  {name:"burger",price:10},
  {name:"fries",price:3},
  {name:"beer",price:5}
]

const getPrice=(men,itm)=>{
  const answer=men.filter((m)=>m.name===itm);
  return answer
}

console.log(getPrice(menu,"beer"))
*/

/*
const menu=[
  {name:"burger",price:10},
  {name:"fries",price:3},
  {name:"beer",price:5},
]

const result=menu.find(a=>a.name==="burger")
console.log(result)
*/

/*
const cars=[
  {brand:"Toyota Altis",type:"sedan"},
  {brand:"Honda Civic",type:"sedan"},
  {brand:"Toyota Fortuner",type:"suv"},
  {brand:"Ford Everest",type:"suv"}
]

const types=[
  {type:"sedan"},
  {type:"suv"}
]

const typeSedan=(aArray)=>{ const answer=aArray.filter(m=>m.type==="sedan")
  return answer;
}

const a=typeSedan(cars)
console.log(a)

const typeSuv=(aArray)=>{ const answer=aArray.filter(m=>m.type==="suv")
  return answer;
}

const b=typeSuv(cars)
console.log(b)

console.log([...typeSuv(cars),...typeSedan(cars)])
*/
//=================================================
//=================================================
//=================================================
//https://medium.freecodecamp.org/reduce-f47a7da511a9
//Focus on reduce

/*
const money=[10,20,30];
const sum=money.reduce((total,p)=>total+p,0);
console.log(sum); 
//60
*/

/*
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average)
//39.37
*/

/*
const money=[10,20,30];
const sum=money.reduce((total,p)=>{
  total=total+p
  return total;
},0);
console.log(sum); 
//60
*/

/*
const money=[10,20,30];
const double=money.reduce((total,p)=>{
  total.push(p*2);
  return total
},[]);
console.log(double)
//[20, 40, 60]
*/

/*
const money=[10,20,30,40];
const above20=money.reduce((total,p)=>{
  if(p>20){
    total.push(p);
  }
  return total
},[])
console.log(above20);
//[30, 40]
*/

/*
const fruitbasket=['banana','cherry','orange','apple','banana','orange','apple','apple'];

const count=fruitbasket.reduce((total,f)=>{
  total[f]=total[f]
  return total;
},{})

console.log(count) ;
//apple: undefined
//banana: undefined
//cherry: undefined
//orange: undefined
*/



/*
const fruitbasket=['banana','cherry','orange','apple','banana','orange','apple','apple'];

const count=fruitbasket.reduce((total,f)=>{
  total[f]=1
  return total;
},{})

console.log(count) ;
//apple: 1
//banana: 1
//cherry: 1
//orange: 1
*/


/*
const fruitbasket=['banana','cherry','orange','apple','banana','orange','apple','apple'];

const count=fruitbasket.reduce((total,f)=>{
  console.log(total[f])
  total[f]=(total[f]||0)+1;
  return total;
},{})

console.log(count) ;
//apple: 3
//banana: 2
//cherry: 1
//orange: 2
*/

/*
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count=fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

console.log(count);
//{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

/*
const data=[[1,2,3],[4,5],[6],7];

const flat=data.reduce((total,p)=>{
  return total.concat(p);
},[]);

console.log(flat)
//[1, 2, 3, 4, 5, 6, 7]
*/

/*
const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color);
  })
  return total;
}, [])

console.log(colors)
//["blue", "green", "green", "black", "orange", "blue", "green", "red"]
*/

/*
const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color);
  })
  return total;
}, [])


const count=colors.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

console.log(count)

//{blue: 2, green: 3, black: 1, orange: 1, red: 1}
*/

/*
function increment(input) { return input + 1;}
function decrement(input) { return input - 1;}
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);
console.log(result) // 3
*/


const muscles=[
  'shoulders','chest','arms','back','legs'
]

const excercising=[
{
  id:'legs3',
  title:'legs3 title',
  description:'descrip legs3...',
  muscles:'legs'
},
{ 
id:'shoulder1',
title:'shoulder1 title',
description:'descrip shoulder1...',
muscles:'shoulders'
},
{
id:'shoulder2',
title:'shoulder2 title',
description:'descrip shoulder2...',
muscles:'shoulders'
},
{
id:'chest1',
title:'chest1 title',
description:'descrip chest1...',
muscles:'chest'
},
{
id:'chest2',
title:'chest2 title',
description:'descrip chest2...',
muscles:'chest'
},

{
id:'arms1',
title:'arms1 title',
description:'descrip arms1...',
muscles:'arms'
},
{
id:'arms2',
title:'arms2 title',
description:'descrip arms2...',
muscles:'arms'
},
{
id:'back1',
title:'back1 title',
description:'descrip back1...',
muscles:'back'
}, 
{
  id:'back2',
  title:'back2 title',
  description:'descrip back2...',
  muscles:'back'
}
, 
{
id:'legs1',
title:'legs1 title',
description:'descrip legs1...',
muscles:'legs'
},
{
id:'legs2',
title:'legs2 title',
description:'descrip legs2...',
muscles:'legs'
},

  
]


/*
targeted result
[
 { 
 muscles:leg,
 training:[{}]
 },
 
 { 
  muscles:leg,
  training:[{}]
 }
]
*/

//Use forEach instead of map
/* Bravo Bravo Finish
const newArrayB=(input2,input1)=>{
  result=[]
  input2.forEach((m)=>{
    const t={}
    t.muscles=m
    t.detail=[]
    result=[...result,t]
    input1.forEach(n=>{
      if(n.muscles===m){
        t.detail.push(n)
      }
    })
  })
  return result;
}
console.log(newArrayB(muscles,excercising))
    /*
    (5) [{…}, {…}, {…}, {…}, {…}]
    0: {muscles: "shoulders", detail: Array(2)}
    1: {muscles: "chest", detail: Array(2)}
    2: {muscles: "arms", detail: Array(2)}
    3: {muscles: "back", detail: Array(2)}
    4: {muscles: "legs", detail: Array(3)}
    */
*/

/*
const newArrayB=(input2)=>{
  result=[]
  input2.map((m)=>{
    const t={}
    t.muscles=m
    result=[...result,t]
  })
  return result;
}
console.log(newArrayB(muscles))
//(5) [{…}, {…}, {…}, {…}, {…}]
//0: {muscles: "shoulders"}
//1: {muscles: "chest"}
//2: {muscles: "arms"}
//3: {muscles: "back"}
//4: {muscles: "legs"}
*/


/*
const newArrayA=(input1)=>{
let result={}
input1.map(f=>{
  if(!result[f.muscles]){
    result[f.muscles]=1
  }
  else{
    result[f.muscles]=result[f.muscles]+1;
  }
})
return result
}
console.log(newArrayA(excercising))
//{shoulders: 2, chest: 2, arms: 2, back: 2, legs: 2}
*/


/*
const newArrayA=(input)=>{
  const result=input.reduce((total,f)=>{
    return 1
  },[])
  return result
}
console.log(newArrayA(excercising))
*/


/*
const newArrayB=(input)=>{
  let result=[]
  input.map((m)=>{
    result.push(m)
  })
  return result
}
console.log(newArrayB(muscles))
//["shoulders", "chest", "arms", "back", "legs"]
*/


/*
const newArrayB=(input)=>{
  let result=[]
  input.map((m)=>{
    result=[...result,m]
  })
  return result
}
console.log(newArrayB(muscles))
//["shoulders", "chest", "arms", "back", "legs"]
*/


//init object
/*
const a={}//create object
a.name="Nikhom"; //create property
a["surname"]="Phut"; //create property
const b=[a] //create array
const c=[...b,{name:"Moo",surname:"Vijit"}]//modify array
console.log(c)
*/


/*
const newArray=(arrayA)=>arrayA.reduce((total,f)=>{
  console.log(f.muscles)//shoulders
  console.log(total[f.muscles])//undefine
  if (!total[f.muscles]) {    
    total[f.muscles] = 1 ;//shoulder:1
  } else {
    total[f.muscles] = total[f.muscles] + 1//shoulder:1+1
    ;
  }
  console.log(total)
  return total; 
},{}) //init object
*/

/*
const newArray=(arrayA)=>arrayA.reduce((total,f)=>{
  !total[f.muscles]    
  ?total[f.muscles] = 1
  :total[f.muscles] = total[f.muscles] + 1;
  return total;
},{})
*/

//===================================
//===================================

/*
//How Asynchrous Work

const posts=[
  {title:'Post1'},
  {title:'Post2'}
]

//Async 1
const getPost=(array)=>{
  setTimeout(()=>{
    let output='';
    array.forEach((m)=>{
      output+=` ${m.title} and`
    });
    console.log(output);
    
  },1000)
}

//Async 2
createPost=(array,newobj)=>{
  setTimeout(()=>{
    array.push(newobj)
  },1500)
}

createPost(posts,{title:'Post 3'});

getPost(posts);
console.log('ok');

//Result
//ok
//Post1 and Post2 and
//Post 3 No Show...
*/
//===========================
//Call back in Asynchronous
//Normally we need to arrage by ourself
//Async 1
/*
const posts=[
  {title:'Post1'},
  {title:'Post2'}
]

const getPost=(array)=>{
  setTimeout(()=>{
    let output='';
    array.forEach((m)=>{
      output+=` ${m.title} and`
    });
    console.log(output);
    
  },1000)
}

//Async 2
createPost=(array2,newobj,callback)=>{
  setTimeout(()=>{
    posts.push(newobj)
    //callback(array2); 
    //this is call back by design
    
  },1500);
  callback(array2); 
  //Post1 and Post2 and
  // this is not call back
}


createPost(posts,{title:'Post 3'},getPost);
//Post1 and Post2 and Post 3 and
*/
//==================================
//basic promise

/*
let p1=new Promise((resolve,reject)=>{
  if(true)
    {resolve('p1 resolved')}
  else
    {reject('p1 rejected')}
})

let p2=Promise.resolve('p2 resolved');

let p3=()=>Promise.resolve('p3 resolved');

let p4=()=>Promise.reject('p4 rejected');


p1.then(m=>console.log(m));
//p1 resolved
p2.then(m=>console.log(m));
//p2 resolved
p3().then(m=>console.log(m));
//p3 resolved
p4().then(m=>console.log('ok')).catch(m=>console.log(m));
//p4 rejected
*/

//=================
//Promise.all
/*
const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
  setTimeout(resolve,4000,'Goodbye')
})
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4])
.then(m=>console.log(m));
//(4) ["Hello World", 10, "Goodbye", Array(10)]
//it happet accordingly 1,2,3,4
*/

//==================================
//promise advance
/*
const posts=[
  {title:'Post1'},
  {title:'Post2'}
]

const getPost=(array)=>{
  setTimeout(()=>{
    let output='';
    array.forEach((m)=>{
      output+=` ${m.title} and`
    });
    console.log(output);
  },10)
}

const showText=(input)=>{
  console.log(input)
}

const createPost=(array,newobj)=>{  
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      //array.push(newobj);
      const error=false;
      if(!error){
        let a=[...array,newobj];
        resolve(a);//.then + what ever function
      }
      else{
        reject('error: something wrong');
        //.catch + whate ever functioin
      }       
    },2000);
  })
}

//execution
createPost(posts,{title:'Post3'})
  .then(res=>getPost(res))
  .catch((m)=>showText(m))
getPost(posts);  

//Post1 and Post2 and
//Post1 and Post2 and Post3 and //delay beacause timeout
*/
//======================================
//======================================
/*
function g(){
  return Promise.resolve(3);
}
g().then(m=>console.log(m))

//
async function f(){
  return 1;
}
f().then(m=>console.log(m))
//3
//1
*/


/*
async function f(){
  let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Done'),1000)
  });
  
  let result=await p1;//await=.then
  console.log(result)
}

f();
*/
////Review Set Time Out
/*
const printA=()=>{
  setTimeout(()=>{
     console.log("A")
  },1000)
}


const printB=(callback)=>{
  console.log("K")
  setTimeout(()=>{
     callback()
     console.log("B")
  },1000)
}

//printA();
printB(printA);
*/
//=============================
//=============================
//we can create promise as constance by
let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
     if(true)
    {resolve('p1 resolved')}
    else
    {reject('p1 rejected')} 
  },1000)
})
//result
//How to use promise
p1.then(m=>console.log(m))
  .catch(err=>console.log(err))

//p1 resolved
//=============================
//Create promise as function by
//============================
let p1=(m)=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
     if(true)
    {resolve(`${m} p1 resolved`)}
    else
    {reject('p1 rejected')} 
  },1000)
})
//result
//How to use
p1("Perfect")
  .then(m=>console.log(m))
  .catch(err=>console.log(err))

//Perfect p1 resolved
//==========================================
//Actually 
//resolve=return == end of program
//Create function that give promise
//in this case myDelay
 

const myFunc=()=>{
  myDelay(1000)
    .then(()=>console.log('Hello'))
    .catch((err)=>console.log(err))
}

const myDelay=(time)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,time) // here resolve==return 
  });
}

myFunc()
//Hello
//=================================
//==================================






