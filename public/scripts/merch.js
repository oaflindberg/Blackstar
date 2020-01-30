const slideShow = () => {

    let counter = 0;
    let emptyArray = [];
    const items = document.querySelectorAll('.carousel figure');
    const labels = document.querySelectorAll('h6');
    let numItems = items.length;
     
    let showCurrent = () => {
        let itemToShow = Math.abs(counter%numItems);
        emptyArray.forEach.call(items, (element) => {
            element.classList.remove('show');
        });
        emptyArray.forEach.call(labels, (element) => {
            element.classList.remove('show');
        });
        items[itemToShow].classList.add('show');
        labels[itemToShow].classList.add('show');
    };
     
    const next = document.querySelector('.next');
    next.addEventListener('click', () => {
        counter++;
        showCurrent();
    }, false);
     
    const prev = document.querySelector('.prev');
    prev.addEventListener('click', () => {
        counter--;
        showCurrent();
    }, false);
     
    };

    slideShow();
 