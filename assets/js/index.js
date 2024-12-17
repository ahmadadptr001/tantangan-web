const p = document.querySelectorAll('.card-body p');

p.forEach( item => {
    let text = item.textContent;
    let text_ringkas = text.substring(0, 100);
    item.textContent = text_ringkas + '  ...';

    item.addEventListener('mouseover',  function() {
        item.textContent = text;
    })

    item.addEventListener('mouseout', function(){
        item.textContent = text_ringkas + '  ...';
    })
})


function navbar() {
    const nav_alternatif = document.querySelector('.nav-alternatif');
    const nav = document.querySelector('.navbar-toggler');


    nav.onclick = function() {
        nav.classList.toggle('active');
        console.log(nav)

        if (nav.classList[1] == 'active') {
            nav_alternatif.style = 'display: block';
        } else {
            nav_alternatif.style = 'display: none';
        }
    }
    
}

navbar()
