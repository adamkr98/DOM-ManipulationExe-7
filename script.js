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

            let rgParenth = document.createElement("div");
                topRowContainer.appendChild(rgParenth);
                lftParenth.classList.add("lftParenth");

            let percent= document.createElement("div");
                topRowContainer.appendChild(percent);
                lftParenth.classList.add("lftParenth");

            let ac = document.createElement("div");
                topRowContainer.appendChild(ac);
                lftParenth.classList.add("lftParenth");
       
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
            let eight = document.createElement("div");
                eight.classList.add("eight");
            let nine = document.createElement("div");
                nine.classList.add("nine");

                let valuesRow2 = document.createElement("div");
                numberValuesWrapper1.appendChild(valuesRow2);
                valuesRow2.classList.add("valuesRow2");

            let four = document.createElement("div");
                four.classList.add("four");
            let five = document.createElement("div");
                five.classList.add("five");
            let six = document.createElement("div");
                six.classList.add("six");

                let valuesRow3 = document.createElement("div");
                numberValuesWrapper1.appendChild(valuesRow3);
                valuesRow3.classList.add("valuesRow3");

            let one = document.createElement("div");
                one.classList.add("one");
            let two = document.createElement("div");
                two.classList.add("two");
            let three = document.createElement("div");
                three.classList.add("three");

                let valuesRow4 = document.createElement("div");
                numberValuesWrapper1.appendChild(valuesRow4);
                valuesRow4.classList.add("valuesRow4");

            let zero = document.createElement("div");
                zero.classList.add("zero");
            let point = document.createElement("div");
                point.classList.add("point");
            let equal = document.createElement("div");
                equal.classList.add("equal");

            valuesRow1.append(nine, eight, seven);
            valuesRow2.append(four, five, six);
            valuesRow3.append(one, two, three);
            valuesRow4.append(zero, point, equal);


    let divide = document.createElement("div");
        operationsContainer.appendChild(divide);
        divide.classList.add("divide");

    let multiply = document.createElement("div");
        operationsContainer.appendChild(multiply);
        multiply.classList.add("multiply");

    let substract = document.createElement("div");
        operationsContainer.appendChild(substract);
        substract.classList.add("substract");

    let add = document.createElement("div");
        operationsContainer.appendChild(add);
        add.classList.add("add");
    

    body.style = `
    border: blue solid 2px;

    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `

    container.style = `
    border: red solid 2px;
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
    border: green solid 2px;
    width: 90%;
    height: 60%;

    display: flex;
    flex-direction: column; 
    `

    topRowContainer.style = `
    border: red solid 2px;
    width: 100%;
    height: 20%;
    
    display: flex;
    justify-content: space-between;
    `

    lftParenth.style = `
    border: black solid 2px;
    width: 23%;
    height: 100%;

    display: flex;

    `
    rgParenth.style = `
    border: black solid 2px;
    width: 23%;
    height: 100%;

    display: flex;
    `
    percent.style = `
    border: black solid 2px;
    width: 23%;
    height: 100%;

    display: flex;
    
    `

    ac.style = `
    border: black solid 2px;
    width: 23%;
    height: 100%;

    display: flex;

    `

    numberValuesWrapper.style = `
    border: brown solid 2px;
    width: 100%;
    height: 20rem;

    display: flex;

    
    `

    numberValuesWrapper1.style = `
    border: blue dashed 4px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    
    `

    valuesRow1.style = `
    border: red solid 2px;
    width: 100%;
    height: 23%;

    display: flex;
    `

        zero.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        one.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        two.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        three.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        four.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        five.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        six.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        seven.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        eight.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        nine.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        point.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        equal.style = `
        border: black solid 2px;
        width: 33%;
        height: 100%;
        `

        valuesRow2.style = `
        border: red solid 2px;
        width: 100%;
        height: 23%;

        display: flex;
        `

        valuesRow3.style = `
        border: red solid 2px;
        width: 100%;
        height: 23%;

        display: flex;
        `

        valuesRow4.style = `
        border: red solid 2px;
        width: 100%;
        height: 23%;

        display: flex;
        `

    operationsContainer.style = `
    border: blue solid 2px;
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: column;

    `

        divide.style = `
        border: black solid 2px;
        width: 100%;
        height: 25%;

        display: flex;

        `

        multiply.style = `
        border: black solid 2px;
        width: 100%;
        height: 25%;

        display: flex;

        `

        substract.style = `
         border: black solid 2px;
        width: 100%;
        height: 25%;

        display: flex;
        
        `

        add.style = `
        border: black solid 2px;
        width: 100%;
        height: 25%;

        display: flex;

        `



