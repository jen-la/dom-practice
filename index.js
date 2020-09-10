// 1. Buttons
// access button element node 
const button = document.querySelector('#display-name-button');
// add event listener - on click, remove .invisible from #display-name
button.onclick = () => {
    const displayName = document.querySelector('#display-name');
    displayName.classList.remove("invisible"); 
};
// AddEventListerner approach:
// button.addEventListener('click', () => {
//     const displayName = document.querySelector('#display-name');
//     displayName.classList.remove("invisible");
// });

// 2. Mouse Over
// when mouse hovers over img, replace src 
const lightBulb = document.querySelector('#light-bulb');

lightBulb.onmouseenter = () => {
    lightBulb.removeAttribute('src');
    lightBulb.setAttribute('src', "images/light-bulb-on.png");
};
lightBulb.onmouseleave = () => {
    lightBulb.removeAttribute('src');
    lightBulb.setAttribute('src', "images/light-bulb-off.png");
};
// Add event listener approach (and more succinct):
// lightBulb.addEventListener('mouseenter', () => {
//     lightBulb.src = 'images/light-bulb-on.png';
// });

// lightBulb.addEventListener('mouseleave', () => {
//     lightBulb.src = 'images/light-bulb-off.png';
// });

// 3. Toggle
// On button click, alert should toggle on and off - ie class 'invisible'
const toggleButton = document.querySelector('#toggle-button');
toggleButton.onclick = () => {
    const toggleAlert = document.querySelector('#toggle-alert');
    if(toggleAlert.classList.contains("invisible")) {
        toggleAlert.classList.remove("invisible");
    } else {
        toggleAlert.classList.add("invisible");
    }
};
// NICK'S solution:
// let isToggled = false;
// const toggleButton = document.querySelector('#toggle-button');
// const toggleAlert = document.querySelector('#toggle-alert');
// toggleButton.addEventListener('click', () => {
//     if (isToggled) {
//         isToggled = false;
//         toggleAlert.classList.add('invisible');
//         toggleButton.innerHTML = 'On';
//     } else {
//         isToggled = true;
//         toggleAlert.classList.remove('invisible');
//         toggleButton.innerHTML = 'Off';
//     }
// });

// 4. Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side 
// Validate text box to be at least 3 characters, on submit button - <button class="btn btn-primary btn-block" type="submit">
// On click, check how many characters, add class of either "is-invalid" or "is-valid"
const formValidate = document.querySelector('#form-validate');
formValidate.onsubmit = () => {
    const inputField = document.querySelector('#form-validate-first-name'); 
    const inputValue = inputField.value;
    if(inputValue.length < 3) {
        inputField.classList.add("is-invalid");
        inputField.classList.remove("is-valid");
    } else {
        inputField.classList.add("is-valid");
        inputField.classList.remove("is-invalid");
    }
};
// NICK's solution:
// const formValidate = document.querySelector('#form-validate');
// const formValidateFirstName = document.querySelector('#form-validate-first-name');

// formValidate.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if (formValidateFirstName.value.length > 2) {
//         formValidateFirstName.classList.add('is-valid');
//         formValidateFirstName.classList.remove('is-invalid');
//     } else {
//         formValidateFirstName.classList.add('is-invalid');
//         formValidateFirstName.classList.remove('is-valid');
//     }
// });

// 5. Challenge: Lists
// const inputForm = document.querySelector('#form-hobby');

// inputForm.onsubmit = () => {
//     const newListItem = document.createElement('li');
//     newListItem.classList.add('list-group-item');
//     newListItem.innerText = document.querySelector('#form-hobby-text').value;
//     const hobbyList = document.querySelector('#hobby-list');
//     hobbyList.appendChild(newListItem); 
// };
// // NICK's solution:
const formHobby = document.querySelector('#form-hobby');
const formHobbyText = document.querySelector('#form-hobby-text');
const hobbyList = document.querySelector('#hobby-list');

formHobby.addEventListener('submit', (event) => {
    event.preventDefault();
    const newHobby = document.createElement('li');
    newHobby.innerText = formHobbyText.value;
    newHobby.classList.add('list-group-item');
    hobbyList.appendChild(newHobby);
});

// 6. Challenge: Lists (Part 2)
const xButtons = document.querySelectorAll('.remove-hobby'); // xButton = array of each xButton
const hobbyList2 = document.querySelector('#hobby-list-2');
const hobbies = document.querySelectorAll('.hobby'); // Hobbies = array of hobbies
for (let i = 0; i < xButtons.length; i++) {    
    xButtons[i].onclick = () => {
        hobbyList2.removeChild(hobbies[i]);
    }
};
// NICK's solution:
// const hobbyList2 = document.querySelector('#hobby-list-2');

// hobbyList2.addEventListener('click', (event) => {
//     if (event.target.classList.contains('remove-hobby')) {
//         event.preventDefault();
//         const parentLi = event.target.parentElement;
//         hobbyList2.removeChild(parentLi);
//     }
// });
