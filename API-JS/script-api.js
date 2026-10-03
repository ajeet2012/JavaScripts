const url = "http://universities.hipolabs.com/search?country=United+States";
const factPara = document.querySelector("#factAsync");
const factPromise = document.querySelector("#factPromise");
const btnAsync = document.querySelector("#btnAsync");
const btnPromise = document.querySelector("#btnPromise");

const getFactsAsyncAwait = async() => {
    console.log("getting data");
    let response = await fetch(url);
    console.log(response);
    console.log(`response status - ${response.status}`);
    let data = await response.json();
    console.log(data[0]);
    factPara.innerText =  `AsyncAwait - ${data[0].country}`;
};

const getFactsPromise = async() => {
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
      console.log(data);
      factPromise.innerText =  `Promise - ${data[0].country}`;
    });
};

btnPromise.addEventListener("click", getFactsPromise);
btnAsync.addEventListener("click", getFactsAsyncAwait);