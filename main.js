
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}


const orderButtons = document.querySelectorAll('.button');
orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'order-form.html';
    });
});


const forms = document.querySelectorAll('.contact-form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        
        form.querySelectorAll('.error-msg').forEach(el => el.remove());

       
        const name = form.querySelector('input[type="text"]');
        if(name.value.trim() === '') {
            showError(name, 'من فضلك اكتب اسمك');
            valid = false;
        }

        
        const phone = form.querySelector('input[type="number"]');
        const phonePattern = /^01[0-9]{9}$/;
        if(!phonePattern.test(phone.value)) {
            showError(phone, 'ادخل رقم موبايل صحيح يبدأ بـ 01 ويتكون من 11 رقم');
            valid = false;
        }

       
        const service = form.querySelector('select');
        if(service.value === '') {
            showError(service, 'اختر الخدمة المطلوبة');
            valid = false;
        }

        
        const notes = form.querySelector('textarea');
        if(notes.value.trim() === '') {
            showError(notes, 'من فضلك اكتب ملاحظاتك');
            valid = false;
        }

        if(valid) {
            alert('تم إرسال الطلب بنجاح!');
            form.reset();
        }
    });
});


function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error-msg';
    error.style.color = 'red';
    error.style.fontSize = '0.9rem';
    error.style.marginTop = '5px';
    error.textContent = message;
    element.parentNode.appendChild(error);
}



const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if(elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// اختيار كل روابط الـ nav
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // إزالة class active من كل الروابط
        navLinks.forEach(l => l.classList.remove('active'));

        // إضافة class active للرابط اللي اتضغط
        this.classList.add('active');
    });
});

