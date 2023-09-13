/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('menuToggle');
        const navbarTogglerIcon = menuToggle.querySelector('.navbar-toggler-icon');
        let isOpen = false;

        menuToggle.addEventListener('click', function () {
            isOpen = !isOpen;

            if (isOpen) {
                navbarTogglerIcon.classList.remove('navbar-toggler-icon');
                navbarTogglerIcon.classList.add('close-icon'); // Nastavte triedu pre ikonu krížika
            } else {
                navbarTogglerIcon.classList.remove('close-icon');
                navbarTogglerIcon.classList.add('navbar-toggler-icon');
            }
        });
    });

