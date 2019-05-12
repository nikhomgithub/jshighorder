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

function increment(input) { return input + 1;}
function decrement(input) { return input - 1;}
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 1);
console.log(result) // 3