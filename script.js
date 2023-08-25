window.promises = [];
let max=5,min=1;
for(let i=0;i<6;i++){
	const promise = new Promise((resolve) => {
		const randomTime = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${randomTime} milliseconds`);
    }, randomTime);
  });
	promises.push(promise)
}

const output=document.getElementById("output")
// output.innerText='hii'
Promise.any(promises).then(res=>{

	output.innerText=res
})

// Do not change the code above this
// add your promises to the array `promises`
