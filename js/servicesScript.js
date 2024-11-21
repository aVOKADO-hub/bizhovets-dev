// Array of FAQ items
const faqItems = [
    {
        question: "Які послуги надає Департамент кадрової політики?",
        answer: "Департамент пропонує послуги з рекрутингу, навчання персоналу, документального забезпечення, юридичної підтримки та адаптації кадрів."
    },
    {
        question: "Як проводиться набір кадрів?",
        answer: "Ми організовуємо набір кадрів через відкриті конкурси, внутрішній відбір та співбесіди, дотримуючись всіх норм законодавства України."
    },
    {
        question: "Чи проводите ви тренінги для підвищення кваліфікації?",
        answer: "Так, ми пропонуємо спеціалізовані тренінги та курси для розвитку професійних навичок військовослужбовців і працівників."
    },
    {
        question: "Як оформити документи для виходу на пенсію?",
        answer: "Наші спеціалісти допоможуть вам правильно оформити всі необхідні документи для виходу на пенсію та отримання виплат."
    },
    {
        question: "Чи надаєте ви юридичні консультації?",
        answer: "Так, ми забезпечуємо юридичну підтримку у вирішенні кадрових питань, а також допомогу у захисті прав військовослужбовців."
    },
    {
        question: "Чи працює департамент із цивільними працівниками?",
        answer: "Так, ми також працюємо з цивільними працівниками, які залучені до забезпечення функціонування Збройних Сил України."
    },
    {
        question: "Які є способи звернення до Департаменту?",
        answer: "Ви можете звернутися до нас через офіційний сайт, телефоном або особисто за адресою, вказаною у розділі 'Контакти'."
    },
    {
        question: "Як подати запит на консультацію або послугу?",
        answer: "Для подачі запиту ви можете заповнити онлайн-форму на нашому сайті або звернутися безпосередньо до наших спеціалістів."
    }
];


// Function to dynamically generate FAQ items
const generateFAQItems = () => {
    const accordionContainer = document.getElementById('faqAccordion');
    faqItems.forEach(item => {
        // Create accordion item
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        // Create button for the question
        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.textContent = item.question;

        // Create content for the answer
        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.innerHTML = `<p>${item.answer}</p>`;

        // Append button and content to the accordion item
        accordionItem.appendChild(button);
        accordionItem.appendChild(content);

        // Append the accordion item to the accordion container
        accordionContainer.appendChild(accordionItem);
    });
};

// Call the function to generate FAQ items
generateFAQItems();

// Add event listeners for the accordion functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

        // Toggle the open class
        accordionItem.classList.toggle('open');

        // Toggle the content visibility
        const content = accordionItem.querySelector('.accordion-content');
        content.classList.toggle('show');
    });
});
// Array of achievements
const achievements = [
    "Впроваджено сучасні технології автоматизації кадрових процесів для підвищення ефективності роботи.",
    "Організація щорічних заходів з підвищення кваліфікації співробітників державної служби.",
    "Забезпечено професійний супровід понад 1000 службовців у питаннях оформлення та адаптації.",
    "Розробка та реалізація спеціалізованих програм для вдосконалення кадрового потенціалу.",
    "Успішне впровадження нових підходів до управління персоналом у відомстві.",
    "Публікація рекомендацій і методичних матеріалів для підвищення якості кадрової роботи в державних установах."
];


// Function to dynamically generate achievements
const generateAchievements = () => {
    const achievementsList = document.getElementById('achievementsList');
    
    achievements.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.classList.add('achievement');
        
        const achievementText = document.createElement('p');
        achievementText.textContent = achievement;
        
        achievementDiv.appendChild(achievementText);
        achievementsList.appendChild(achievementDiv);
    });
};

// Call the function to generate achievements
generateAchievements();
// Array of testimonials
const testimonials = [
    {
        name: "Михайло П.",
        text: `"Процес підготовки документів був простим і зрозумілим. Департамент надав повну підтримку та відповів на всі мої питання."`,
        imgSrc: "../img/profile.png",
        alt: "Михайло П."
    },
    {
        name: "Олена С.",
        text: `"Дякую за професійні консультації щодо виходу на пенсію. Спеціалісти допомогли швидко зібрати всі необхідні документи."`,
        imgSrc: "../img/profile.png",
        alt: "Олена С."
    },
    {
        name: "Андрій К.",
        text: `"Навчальні тренінги, організовані департаментом, значно підвищили мої професійні навички. Високий рівень підготовки та корисні матеріали."`,
        imgSrc: "../img/profile.png",
        alt: "Андрій К."
    },
    {
        name: "Марія Л.",
        text: `"Мене вразив персоналізований підхід до адаптації після переведення на нову посаду. Дякую за підтримку та рекомендації!"`,
        imgSrc: "../img/profile.png",
        alt: "Марія Л."
    }
];


// Function to generate testimonial cards
const generateTestimonials = () => {
    const testimonialsList = document.getElementById('testimonialsList');
    
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('card', 'mb-4');
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex');
        
        const img = document.createElement('img');
        img.src = testimonial.imgSrc;
        img.alt = testimonial.alt;
        img.classList.add('avatar', 'img-fluid', 'rounded-circle');
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.objectFit = "cover";
        img.style.marginRight = "15px";
        
        const textContainer = document.createElement('div');
        
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = testimonial.name;
        
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = testimonial.text;
        
        textContainer.appendChild(title);
        textContainer.appendChild(text);
        
        cardBody.appendChild(img);
        cardBody.appendChild(textContainer);
        
        testimonialCard.appendChild(cardBody);
        
        testimonialsList.appendChild(testimonialCard);
    });
};

// Call the function to generate the testimonials
generateTestimonials();
