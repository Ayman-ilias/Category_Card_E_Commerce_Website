const categoryContainer = document.getElementById('categoryContainer');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        let autoSlideTimeout;
        let buttonPressTimeout;

        const autoSlide = () => {
            categoryContainer.scrollBy({ left: 200, behavior: 'smooth' });
            setTimeout(() => {
                categoryContainer.scrollBy({ left: -200, behavior: 'smooth' });
            }, 3000);
        };

        const startAutoSlide = () => {
            autoSlideTimeout = setInterval(autoSlide, 5000);
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideTimeout);
            clearTimeout(buttonPressTimeout);
            buttonPressTimeout = setTimeout(startAutoSlide, 40000);
        };

        nextBtn.addEventListener('click', () => {
            categoryContainer.scrollBy({ left: 200, behavior: 'smooth' });
            resetAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            categoryContainer.scrollBy({ left: -200, behavior: 'smooth' });
            resetAutoSlide();
        });

        startAutoSlide();