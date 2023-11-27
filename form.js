'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert('Повідомлення відправлено')
                form.reset();
            } else {
                alert('Помилка');
            }
        } else {
            alert('Заповність вірно всі поля. Дякую');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (validateEmail(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else {
                if (input.value === '' || input.value.length < 3) {
                    formAddError(input);
                    error++;
                }
            }

        }

        return error;

    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function validateEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
    }
});
