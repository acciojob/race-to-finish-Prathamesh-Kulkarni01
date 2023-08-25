window.promises = [];
let max=5,min=1;
for(let i=0;i<6;i++){
	const p=new Promise((res,rej)=>{
		let time=Math.floor(Math.random()*(max-min+1)+min)
		setTimeOut(()=>{
			res()
		},time*1000)
	})
	promises.push(p)
}

const output=document.getElementById("output")
output.innerText=Promise.any(promises)

// Do not change the code above this
// add your promises to the array `promises`
