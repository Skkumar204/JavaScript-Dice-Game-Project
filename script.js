'use strict'

const dicedl = document.querySelector('.dice')

const cusr = document.getElementById('current--0')

const p1 = document.querySelector('.player--0')
const p2 = document.querySelector('.player--1')

let score = [0, 0];

let cus = 0;

const currentplayer = 0;
let activeplayer = 0;

let playing=true;

document.querySelector('.btn--roll').addEventListener('click', () => {

    if(playing)
    {
        const ran = Math.ceil(Math.random() * 6)


        dicedl.src = `dice-${ran}.png`
        dicedl.classList.remove('hidden');

        if (ran !== 1) {
            cus += ran;

            document.getElementById(`current--${activeplayer}`).textContent = cus;
        }
        else {
            document.getElementById(`current--${activeplayer}`).textContent = 0;
            cus = 0
            activeplayer = activeplayer === 0 ? 1 : 0;
            p1.classList.toggle('player--active');
            p2.classList.toggle('player--active');
        }
    }
})


document.querySelector('.btn--hold').addEventListener('click', () => {

    if (playing) {

        score[activeplayer] += cus;
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];

        if(score[activeplayer]>=20)
        {
            playing = false
            dicedl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        }
        else{
            document.getElementById(`current--${activeplayer}`).textContent = 0;
            cus = 0
            activeplayer = activeplayer === 0 ? 1 : 0;
            p1.classList.toggle('player--active');
            p2.classList.toggle('player--active');
        }
    }
})


document.querySelector('.btn--new').addEventListener('click',(_)=>{

    document.querySelector(`.score`).textContent = 0;

    document.querySelector(`.current-score`).textContent =0;
  
    p1.classList.remove('player--winner');
    p2.classList.remove('player--winner');

    score = [0,0]
    p1.classList.add('player--active')
    playing=true;
    
    p2.classList.remove('player--active')
})

