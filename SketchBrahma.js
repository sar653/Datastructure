let sentence = "This is a test sentence and this test is only a test";
   let bannedWord = "test";




   function removebanned(a,b){
let arr=a.toLowerCase().split(" ")
console.log(arr)
b=b.toLowerCase()
console.log(b)
    let newarr=[]
    let obj={}


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== b) {
          newarr.push(arr[i]);
        }
      }


      for (let i = 0; i < newarr.length; i++) {
        obj[newarr[i]] = obj[newarr[i]] ? obj[newarr[i]] + 1 : 1;
      }
 console.log(obj)
 console.log(Object.values(obj))
 console.log( Object.keys(obj))

 let newobj={}
 for(let i=0;i<Object.keys(obj).length;i++) {


    if (Object.values(obj)[i]>1) {

        newobj[Object.keys(obj)[i]]= Object.values(obj)[i]
    }
 }
 
 return newobj
   }
   const removed=removebanned(sentence,bannedWord)
   console.log(removed)
