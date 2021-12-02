const cards = document.querySelectorAll('.card');

cards.forEach(function(card){

    const btn = card.querySelector('.question__wrapper')

        btn.addEventListener('click', function(){

            cards.forEach(function(item){
                if(item != card){
                    console.log(item.firstElementChild.firstElementChild.firstElementChild)
                    item.classList.remove('show-text');
                    item.firstElementChild.firstElementChild.firstElementChild.style.fontWeight = 'normal';
                    // item.firstElementChild.firstElementChild.firstElementChild.style.color = 'hsl(240, 6%, 50%)';
                    item.firstElementChild.lastElementChild.lastElementChild.style = 'transform: rotate(0deg);';
                }
            })
            card.classList.toggle('show-text');
            card.firstElementChild.firstElementChild.firstElementChild.style.fontWeight = 'bold';
            // card.firstElementChild.firstElementChild.firstElementChild.style.color = 'black';
            card.firstElementChild.lastElementChild.lastElementChild.style = 'transform: rotate(180deg);';
        })
})