async function getAdvice(){
    
    try {
    const adviceResponse = await fetch("https://api.adviceslip.com/advice")
    const adviceData = await adviceResponse.json();
    // console.log(adviceData.slip.id)
    // console.log(adviceData.slip.advice)
    let idNo = adviceData.slip.id;
    let adv = adviceData.slip.advice
    let adviceId = document.querySelector(".id")
    let adviceContent = document.querySelector(".content")

    adviceId.innerHTML = `${idNo}`;
    adviceContent.innerHTML = `${adv}` 
}
     catch (error) {
        console.log("fetch is not working ",error)
    }
}
let btn = document.querySelector(".adviceBtn")
btn.addEventListener("click",getAdvice)
getAdvice()