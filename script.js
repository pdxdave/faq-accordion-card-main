const cards = document.querySelectorAll('article');

cards.forEach(function(card){

    const btn = card.querySelector('.question')

        btn.addEventListener('click', function(){

            cards.forEach(function(item){
                if(item != card){
                    console.log(item)
                    item.classList.remove('show-answer');
                    item.firstElementChild.firstElementChild.firstElementChild.style.fontWeight = 'normal'
                    item.firstElementChild.lastElementChild.lastElementChild.style = 'transform: rotate(0deg); transition: .2s ease-in-out;'
                }
            })
            card.classList.toggle('show-answer');
            card.firstElementChild.firstElementChild.firstElementChild.style.fontWeight = 'bold'
            card.firstElementChild.lastElementChild.lastElementChild.style = 'transform: rotate(180deg); transition: .2s ease-in-out;'
        })
})