/* const nextButton = document.getElementById('nextButton');
const nextContent = document.querySelector('.end');

nextButton.addEventListener('click', () => {
    // При кліку на кнопку показуємо наступний блок
    nextContent.style.display = 'block';
    const nextContentPosition = nextContent.offsetTop;

    window.scroll({
        top: nextContentPosition,
        behavior:"smooth"
    });

});
*/
// Burger menu
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})


// JavaScript для слайд-шоу start
let slideIndex = 0;

function showSlide () {

    // наші всі слайди
    let slides = document.querySelectorAll('.slide')
    
    // console.log(slides.length) // 3

    // проходимось по ним та ховаємo
    slides.forEach((elem) => {
        //console.log(elem)
        elem.classList.remove('visible')
    });


    
    // console.log (slideIndex) // 0 1 2 3
    slideIndex++;
    // console.log (slideIndex) // 1 2 3 4

    if (slideIndex > slides.length) {
        slideIndex = 1
    };

    if (slides[slideIndex-1].classList.contains('visible') === false ) {
      //  console.log(slides[slideIndex])
        slides[slideIndex - 1].classList.add('visible')
    }

   
   // slides[slideIndex - 1].classList.remove('active')
    // slides[slideIndex - 1].style.display = 'block';
    



    setTimeout(showSlide, 2500)
}
showSlide ()
// JavaScript для слайд-шоу end



// JavaScript для модального вікна start
let mymodalClick = document.querySelector('.mymodalClick')
let mymodal = document.querySelector('.mymodal')
let mymodalClose = document.querySelector('.mymodal_close')


mymodalClick.addEventListener('click', ()=> {
    mymodal.style.opacity = '1';
    mymodal.style.visibility = 'visible';
    document.body.classList.add('modal-open');
})


mymodalClose.addEventListener('click', ()=> {
    mymodal.style.opacity = '0';
    mymodal.style.visibility = 'hidden';
    document.body.classList.remove('modal-open');
})

// JavaScript для модального вікна end








// JS для номеру телефону замовника 


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('viberCallbackForm');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        console.log (e)
        let formData = new FormData(form);

        // Отримання значення номера телефону з форми
        let phoneNumber = formData.get('phoneNumber');

        // Перевірка номера на валідність
        if (!isValidPhoneNumber(phoneNumber)) {
            alert('Невірний формат номера телефону. Введіть номер у форматі +380XXXXXXXXX');
            return;
        }

        let response = await fetch('server-url.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            let result = await response.json();
            alert('Повідомлення відправлено');
            form.reset();
        } else {
            alert('Помилка');
        }
    }

    // Функція для перевірки номера телефону на валідність
    function isValidPhoneNumber(phoneNumber) {
        // Вираз для перевірки номера телефону у форматі +380XXXXXXXXX
        const phoneNumberPattern = /^\+380\d{9}$/;
        return phoneNumberPattern.test(phoneNumber);
    }
});


