


const countryData = {
    async getCountry(){
        const res = await fetch('https://freecurrencyapi.net/api/v2/latest?apikey=ce782ad0-38e0-11ec-9d80-cb5e7b313459')
        const data = await res.json();
        return data;
    }, 
}



const UI = {
    loadSelector(){
        const displayCountry = document.querySelector(".country");
        const displayrateAndCountry = document.querySelector(".rateAndCountry");
        const input = document.querySelectorAll("input");
        const select = document.querySelectorAll("select");
        const userInput = document.querySelector(".userInput");
        return {
            displayCountry,
            displayrateAndCountry,
            input,
            userInput,
            select
        }
    },
    validateInput(input){
        if(input[0] === '' || input[0] === 1){
            return false;
        }
        return true;
    },
    userInput(){
        const {input} = this.loadSelector();
        const firstUserInput = +input[0].value;
        const data = this.validateInput(input);
        if(data === true){
            return firstUserInput;
        }
    },
    firstPopulateUi(dataItem, dataValue){
        const {select} = this.loadSelector();
        for(let i = 0; i < dataItem.length; i++){
            select[0].innerHTML += `<option id = "${dataItem[i]}" value = "${dataValue[i]}">${dataItem[i]}</option>`
        }
    },
    secondPopulateUi(dataItem, dataValue){
        const {select} = this.loadSelector();
        for(let i = 0; i < dataItem.length; i++){
            select[1].innerHTML += `<option id = "${dataItem[i], dataValue[i]}" value = "${dataValue[i]}">${dataItem[i]}</option>`
        }
    },
    converter(a, e){
        console.log(this.userInput());
        const {select, input} = this.loadSelector();
        input[a].value = input[e].value * select[a].value / select[e].value;
    },
    displayCurrencyName(e){
        const {displayCountry, select} = this.loadSelector();
            const val = +e.target.value;
            const data = select[0].children.length -1 ;
            let element = [];
            for(let i = 0; i < data; i++){
                element.push(select[0].children[i])
            }
            element.filter((elemn) => {
                if(+elemn.value === val){
                    const data = elemn.id
                    displayCountry.textContent = `${data} Equal`;
                }
            })
    },
    displayCountry(e){
        const {displayrateAndCountry, select} = this.loadSelector();
        const val = +e.target.value;
        const data = select[0].children.length -1 ;
        let element = [];
        for(let i = 0; i < data; i++){
            element.push(select[0].children[i])
        }
        element.filter((elemn) => {
            if(+elemn.value === val){
                const data = elemn.id
                const itemVal = elemn.value;
                displayrateAndCountry.textContent = `${itemVal} ${data} (USD BASED VALUE)`;
            }
        })
    },
    inputIvent(){
        const {input} = this.loadSelector();
        input[0].addEventListener("keyup", this.userInput.bind(this))
    },
    async init (){
        const {select, input} = this.loadSelector();
            const data = await countryData.getCountry();
            const item = data.data;
            const dataItem = Object.keys(item);
            const dataValue = Object.values(item)
            this.firstPopulateUi(dataItem, dataValue);
            this.secondPopulateUi(dataItem, dataValue);
            storage.data = data;
            storage.getVal();
            // this.inputIvent();
            select[0].addEventListener("click", this.displayCurrencyName.bind(this));
            select[1].addEventListener("click", this.displayCountry.bind(this))
            input[0].addEventListener('keyup', () => this.converter(1,0))
            input[1].addEventListener('keyup', () =>  this.converter(0,1))
            input[0].addEventListener('change', () =>  this.converter(1,0))
            input[1].addEventListener('change', () =>  this.converter(0,1))
    }
}
UI.init();


// save to localstorage
const storage = {
    data: '',

    getVal(){
        console.log(this.data);
    }
    // saveToStorage(){
    //     localStorage.setItem("displayCountry", this.displayCountry);
    //     localStorage.setItem("displayCurrencyName", this.displayCurrencyName);
    // },
    // getFromStorage(){
    //    const country =  localStorage.getItem("displayCountry");
    //    const currency =  localStorage.getItem("displayCurrencyName");
    //    return {country, currency};
    // }
}

storage.getVal();



































// const countryData = {
//     async getCountry(){

//         const res = await fetch('https://freecurrencyapi.net/api/v2/latest?apikey=ce782ad0-38e0-11ec-9d80-cb5e7b313459')
//         const data = await res.json();
//         return data;
//     },
//         // const res = await fetch("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
//         // const data = await res.json();
//         // return data;
//         // const res = await fetch('https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=ec83289aa85d16aa5080')
       
// }



// const UI = {
//     loadSelector(){
//         const displayCountry = document.querySelector(".country");
//         const displayrateAndCountry = document.querySelector(".rateAndCountry");
//         const firstInput = document.querySelector(".inputValue");
//         const displayInput = document.querySelector(".displayInput");
//         const selectCountryOne = document.querySelector(".countryForm");
//         const selectCountryTwo = document.querySelector(".countryTo");
//         const userInput = document.querySelector(".userInput");
//         return {
//             displayCountry,
//             displayrateAndCountry,
//             firstInput,
//             displayInput,
//             selectCountryOne,
//             selectCountryTwo,
//             userInput
//         }
//     },
//     validateInput(firstInput){
//         if(firstInput === '' || firstInput === 1){
//             // this.showMessage("Please input valid information")
//             return false;
//         }
//         return true;
//     },
//     userInput(){
//         const {firstInput} = this.loadSelector();
//         const firstUserInput = +firstInput.value;
//         const data = this.validateInput(firstUserInput);
//         if(data === true){
//             return firstUserInput;
//         }
//     },
//     firstPopulateUi(dataItem){
//         const {selectCountryOne} = this.loadSelector();
//         dataItem.map(item => {
//             selectCountryOne.innerHTML += `<option value = "${item}">${item}</option>`
//         })
//     },
//     secondPopulateUi(dataItem){
//         const {selectCountryTwo} = this.loadSelector();
//         dataItem.map(item => {
//             selectCountryTwo.innerHTML += `<option value = "${item}">${item}</option>`
//         })
//     },
//     getFirstCurrency (e){
//         const {displayCountry, selectCountryOne} = this.loadSelector();
//             const val = e.target.value;
//             displayCountry.textContent = val;
//             const data = selectCountryOne.children.length -1 ;
//             const elem = selectCountryOne.children;
//             let element = [];
//             for(let i = 0; i < data; i++){
//                 element.push(selectCountryOne.children[i])
//             }
//             let result = 0;
//             element.filter((elemn) => {
//                 if(elemn.value === val){
//                     const data = +elemn.id
//                     result = data;
//                 }
//             })
//             // console.log(result)
//             return result;
//     },
//     getSecondCurrency(e){
//         const {displayrateAndCountry, selectCountryTwo} = this.loadSelector();
//             const val = e.target.value;
//             displayrateAndCountry.textContent = ` ${val}`;
//             const data = selectCountryTwo.children.length -1;
//             const element = [];
//                 for(let i = 0; i < data; i++){
//                     element.push(e.target.children[i])
//                 }
//                 let result = 5;
//                 element.filter((elemn) => {
//                     if(elemn.value === val){
//                         const data = +elemn.id
//                         displayrateAndCountry.textContent = `${data} ${val}`;
//                         result = data;
//                     }
//                 })
//                 console.log(result)
//                 return result;
//     },
//     multiplyTheValue(e){
//         // console.log(this.getSecondCurrency())
//         console.log(this.getFirstCurrency())
//         // console.log(this.userInput() * 5);
//         // return((this.getFirstCurrency(e) * this.getSecondCurrency(e)) * this.userInput() );
//     },
//     inputIvent(){
//         const {firstInput} = this.loadSelector();
//         firstInput.addEventListener("keyup", this.userInput.bind(this))
//     },
//     async init (){
//         const {displayCountry, selectCountryOne, selectCountryTwo, firstInput} = this.loadSelector();
//             const data = await countryData.getCountry();
//             const item = data.data;
//             const dataItem = Object.keys(item);
//             const dataValue = Object.values(item);
//             this.firstPopulateUi(dataItem);
//             this.secondPopulateUi(dataItem, dataValue);
//             this.inputIvent();
//             selectCountryOne.addEventListener('click', this.getFirstCurrency.bind(this))
//             selectCountryTwo.addEventListener('click', this.getSecondCurrency.bind(this));
//             firstInput.addEventListener('keyup', (e) => {
//                 this.multiplyTheValue(e)
//             });
//     }
// }
// UI.init();



// // const {selectCountryOne,selectCountryTwo} = UI.loadSelector();
// // selectCountryOne.addEventListener('click', (e) =>{
// //     // console.log(selectCountryOne)
// //     // console.log(selectCountryOne)
// //     const sagor = e.target;
// //     // console.log(sagor.length);
// //     // console.log(sagor);
// //     for(let i = 0; i <= sagor.length; i++){
// //         if(sagor[i].id === '3.67296'){
// //             return sagor[i].id
// //         }
// //     }
// //     function item(){
// //         // for(let i = 0; i <= 140; i++){
// //             // if(sagor[2].id === 0){
// //             //     console.log(sagor)
// //             // }
// //         // }
// //     }
// //     item()
    
// // })








// // async function getCountry(){
// //     const res = await fetch("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
// //     const data = await res.json();
// //     return data;
// // }
// // async function data(){
// //     const item = await getCountry();
// //     console.log(item)
// // }
// // data()

// // fetch("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
// // .then(response => response.json())
// // .then(function (data){
// //     console.log(data)
// // })


// // fetch('https://freecurrencyapi.net/api/v2/latest?apikey=ce782ad0-38e0-11ec-9d80-cb5e7b313459')
// // .then(res => res.json())
// // .then(function (data) {
// //     console.log(data)
// // })

