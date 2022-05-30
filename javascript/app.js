// selecting
const submit_button = document.querySelector('.submit-button');
const card_content_1 = document.querySelector('.card-content__1');
const card_content_2 = document.querySelector('.card-content__2');
const rating_buttons = document.querySelectorAll('.rating-button');
const rate = document.querySelector('.rate')
let stars_rate = 4 //default rate


submit_button.addEventListener('click', (event) => {
    card_content_1.classList.add('hide');
    rate.textContent = stars_rate
    card_content_2.classList.remove('hide');
})

rating_buttons.forEach(button => {
    button.addEventListener('click', ratingHandler)})

function ratingHandler(event) {
    rating_buttons.forEach(button => {
        button.classList.remove('selected');
    })


    if(event.target.classList.contains('rating-button')) {
    event.target.classList.add('selected');
    } else {
        event.target.parentElement.classList.add('selected');
    }
    stars_rate = event.target.textContent
}
