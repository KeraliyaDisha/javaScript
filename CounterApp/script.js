const countValue = document.querySelector('#counter');

const increment = () => {
    // get the value
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value
    countValue.innerText = value;
}

const decrement = () => {
    // get the value
    let value = parseInt(countValue.innerText);
    // update the value
    value = value - 1;
    // set the value
    countValue.innerText = value;
}
