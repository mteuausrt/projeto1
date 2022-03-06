window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//esse script foi criado pelo site do github
//com o comando pull, foi adicionado ao nosso repositorio local

const btn = document.querySelectorAll('button')[0];

btn.addEventListener('click', () => {

    if(btn.classList.contains('clicked')){
        btn.classList.remove('clicked')
        btn.classList.add('disclicked')
    }else{
        btn.classList.add('clicked')
        btn.classList.remove('disclicked')
    }

})