// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

var print=async function(){
    let promise1=await new Promise((resolve,reject)=>{
        resolve("a")
    })
    console.log(promise1)
    let promise2=await new Promise((resolve,reject)=>{
        resolve("b")
    })
    console.log(promise2)
    let promise3=await new Promise((resolve,reject)=>{
        setTimeout(() => resolve("c"), 3000)
    })
    console.log(promise3);
    let promise4=await new Promise((resolve,reject)=>{
        setTimeout(() => resolve("d"), 0)
    })
    console.log(promise4)
    let promise5=await new Promise((resolve,reject)=>{
        resolve("e")
    })
    console.log(promise5)

}
print()