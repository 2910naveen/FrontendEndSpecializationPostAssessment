const fs = require('fs');
const {parse} = require('csv-parse');

var arr = [];
var total = 0;

    var file = fs.createReadStream("./data/students.csv")
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      function getSum(total,num) 
      {
          return total + parseInt(num.grade);
      }
      for(let i=0;i<row.length;i=i+6)
      {
         let obj = {};
         obj[row[i]] = row[i+1];
         obj[row[i+2]] = row[i+3];
         obj[row[i+4]] = row[i+5];
         arr.push(obj);
      }
      arr.sort(function(a,b){return parseInt(a.age)-parseInt(b.age)});
      total = arr.reduce(getSum,0);
    })
    .on("end", function () {
      console.log("average Of grades of Array: "+total/arr.length);
      console.log("The Sorted Array is:")
      console.log(arr);
    })
    .on("error", err=> {
      console.log("file not found"+err);
    });

  


  