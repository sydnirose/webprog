// select empty div and assign to variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put h1 inside of it, create new element!
const heading = document.createElement('h1');
heading.innerHTML = 'Hi guys! When I was in middle school my parents thought about starting a llama/alpaca farm.';

// adding cursor hover to heading
heading.style.cursor = 'pointer';

// this changes background color and shows clicked in console
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = "pink";
}