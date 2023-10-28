let a = 10;
let b =0;

const waitlist =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(20);
    },2000)

});

waitlist.then((data)=>{
    b = data;
    console.log(a+b);
})