
// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

var friendData=[
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
  "name":"Cortney",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      2,
      5,
      2,
      5,
      5,
      2,
      2,
      1,
      2,
      2
    ]
},
{
  "name":"Charley",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      2
  ]
},
{
  "name":"Alicia",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      3,
      1,
      5,
      4,
      5,
      2,
      2,
      3,
      3,
      1
    ]
},

];
{
 var test =[
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2
    ]
}


  
var Diff = [];
var totalDifference=100
console.log("test",test);

friendData.forEach(function(item,index){
   
  for(var i = 0; i < 10; i++){
  Diff.push(Math.abs(parseInt(test)-parseInt(item.scores[i])));
  }
  console.log('Diff in loop',Diff);
  console.log(
    Diff.reduce((a, b) => a + b)
  )

  iDifference=Diff.reduce((a, b) => a + b)

  if(totalDifference>iDifference){
    totalDifference = iDifference
    matchName =item.name;
    matchImg = item.photo;

  }

  Diff = [];
  return Diff;
  
});

console.log("totalDifference",totalDifference);
console.log("friendArrName", matchName);
console.log("friendArrPhotoloop",matchImg)




module.exports = friendData;
