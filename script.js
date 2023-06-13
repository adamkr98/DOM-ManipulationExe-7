let body = document.querySelector("body");

let container = document.createElement("div");
    body.appendChild(container);
    container.classList.add("container");

let calculatorFrame = document.createElement("div");
    container.appendChild(calculatorFrame);
    calculatorFrame.classList.add("calculatorFrame");

let displayedInput = document.createElement("div");
    calculatorFrame.appendChild(displayedInput);
    displayedInput.classList.add("displayedInput");
   

let caracterFieldsContainer = document.createElement("div");
    calculatorFrame.appendChild(caracterFieldsContainer);
    caracterFieldsContainer.classList.add("caracterFieldsContainer");

    let topRowContainer = document.createElement("div");
        caracterFieldsContainer.appendChild(topRowContainer);
        topRowContainer.classList.add("topRowContainer");

            let lftParenth = document.createElement("div");
                topRowContainer.appendChild(lftParenth);
                lftParenth.classList.add("lftParenth");
                lftParenth.innerHTML = "(";

            let rgParenth = document.createElement("div");
                topRowContainer.appendChild(rgParenth);
                rgParenth.classList.add("rgParenth");
                rgParenth.innerHTML = ")";

            let percent= document.createElement("div");
                topRowContainer.appendChild(percent);
                percent.classList.add("percent");
                percent.innerHTML = "%";

            let ac = document.createElement("div");
                topRowContainer.appendChild(ac);
                ac.classList.add("ac");
                ac.innerHTML = "AC";
       
    let numberValuesWrapper = document.createElement("div");
        caracterFieldsContainer.appendChild(numberValuesWrapper);
        numberValuesWrapper.classList.add("numberValuesWrapper");

        let numberValuesWrapper1 = document.createElement("div");
            numberValuesWrapper.appendChild(numberValuesWrapper1);
            numberValuesWrapper1.classList.add("numberValuesWrapper1");

        // let numberValuesContainer = document.createElement("div");
        //     numberValuesWrapper.appendChild(numberValuesContainer);
        //     numberValuesContainer.classList.add("numberValuesContainer");

        let operationsContainer = document.createElement("div");
            numberValuesWrapper.appendChild(operationsContainer);
            operationsContainer.classList.add("operationsContainer");

                let valuesRow1 = document.createElement("div");
                    numberValuesWrapper1.appendChild(valuesRow1);
                    valuesRow1.classList.add("valuesRow1");

            let seven = document.createElement("div");
                seven.classList.add("seven");
                seven.innerHTML = "7";
            let eight = document.createElement("div");
                eight.classList.add("eight");
                eight.innerHTML = "8";
            let nine = document.createElement("div");
                nine.classList.add("nine");
                nine.innerHTML = "9";

                let valuesRow2 = document.createElement("div");
                numberValuesWrapper1.appendChild(valuesRow2);
                valuesRow2.classList.add("valuesRow2");

            let four = document.createElement("div");
                four.classList.add("four");
                four.innerHTML = "4";
            let five = document.createElement("div");
                five.classList.add("five");
                five.innerHTML = "5";
            let six = document.createElement("div");
                six.classList.add("six");
                six.innerHTML = "6";

                let valuesRow3 = document.createElement("div");
                numberValuesWrapper1.appendChild(valuesRow3);
                valuesRow3.classList.add("valuesRow3");

            let one = document.createElement("div");
                one.classList.add("one");
                one.innerHTML = "1";
            let two = document.createElement("div");
                two.classList.add("two");
                two.innerHTML = "2";
            let three = document.createElement("div");
                three.classList.add("three");
                three.innerHTML = "3";

                let valuesRow4 = document.createElement("div");
                numberValuesWrapper1.appendChild(valuesRow4);
                valuesRow4.classList.add("valuesRow4");

            let zero = document.createElement("div");
                zero.classList.add("zero");
                zero.innerHTML = "0";
            let point = document.createElement("div");
                point.classList.add("point");
                point.innerHTML = ".";
            let equal = document.createElement("div");
                equal.classList.add("equal");
                equal.innerHTML = "=";

            valuesRow1.append(nine, eight, seven);
            valuesRow2.append(four, five, six);
            valuesRow3.append(one, two, three);
            valuesRow4.append(zero, point, equal);

           

           

            // displayedInput.value =


           
            



            // let 

            // let addition = () => {
            //     let a = parseInt(prompt());
            //     let b = parseInt(prompt());
        
            //    console.log(a, b)
            // }
            

            //when nb clicked adds it to an array
            //


    let div = document.createElement("div");
        operationsContainer.appendChild(div);
        div.classList.add("divide");
        div.innerHTML = "%";

    let multi = document.createElement("div");
        operationsContainer.appendChild(multi);
        multi.classList.add("multiply");
        multi.innerHTML = "X";

    let subst = document.createElement("div");
        operationsContainer.appendChild(subst);
        subst.classList.add("substract");
        subst.innerHTML = "-";

    let add = document.createElement("div");
        operationsContainer.appendChild(add);
        add.classList.add("add");
        add.innerHTML = "+";



        displayedInput.addEventListener("submit", () => {

        })

        let addition = (a, b) => {
            let sum = a + b;
            return sum;
        };

        let substract = (a, b) => {
            let diff = a - b;
            return diff;
        };

        let divide = (a, b) => {
            let divi = a / b;
            return divi;
        }

        let multiply = (a, b) => {
            let produ = a * b;
            return produ;
        }
    

    body.style = `
    // border: blue solid 2px;

    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `

    container.style = `
    // border: red solid 2px;
    border-radius: 0.5rem;

    width: 50%;
    height: 30rem;

    display: flex;
    justify-content: center;
    
    `
    calculatorFrame.style = `
    border: red solid 2px;
    width: 80%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `

    displayedInput.style = `
    border: blue solid 2px;
    width: 80%;
    height: 4rem;

    
    `
    
    caracterFieldsContainer.style = `
    border: pink solid 2px;
    width: 91%;
    height: 70%;

    display: flex;
    flex-direction: column; 
    
    `

    topRowContainer.style = `
    // border: red solid 2px;
    width: 100%;
    height: 20%;
    
    display: flex;
    justify-content: space-around;
    
    `

    lftParenth.style = `
    background-color: #DADCE0;
    width: 22%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    `
    rgParenth.style = `
    background-color: #DADCE0;
    width: 22%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    `
    percent.style = `
    background-color: #DADCE0;
    width: 22%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    `

    ac.style = `
    background-color: #DADCE0;
    width: 22%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    `

    numberValuesWrapper.style = `
    // border: brown solid 2px;
    width: 100%;
    height: 20rem;

    display: flex;

    
    `

    numberValuesWrapper1.style = `
    // border: blue dashed 4px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    `

    valuesRow1.style = `
    // border: red solid 2px;
    width: 100%;
    height: 22%;

    display: flex;
    justify-content: space-around;
    
    `

        zero.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        one.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        two.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        three.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        four.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        five.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        six.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        seven.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        eight.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        nine.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 98%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        point.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 98%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        equal.style = `
        background-color: #F1F3F4;
        width: 30%;
        height: 98%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        valuesRow2.style = `
        // border: red solid 2px;
        width: 100%;
        height: 22%;

        display: flex;
        justify-content: space-around;
        `

        valuesRow3.style = `
        // border: red solid 2px;
        width: 100%;
        height: 22%;

        display: flex;
        justify-content: space-around;
        `

        valuesRow4.style = `
        // border: red solid 2px;
        width: 100%;
        height: 22%;

        display: flex;
        justify-content: space-around;
        align-content: center;
        `

    operationsContainer.style = `
    // border: blue solid 2px;
    width: 32%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    `

        divide.style = `
        background-color: #DADCE0;
        width: 96%;
        height: 22%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        multiply.style = `
        background-color: #DADCE0;
        width: 96%;
        height: 22%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        substract.style = `
        background-color: #DADCE0;
        width: 96%;
        height: 22%;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        add.style = `
        background-color: #DADCE0;
        width: 96%;
        height: 22%;

        display: flex;
        justify-content: center;
        align-items: center;
        `



