let main = document.querySelector('.main');
fetch('https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1')
.then((res) => res.json())
.then((data) => {
    console.log(data)
    data.items.map((a) => {
        console.log(a.poster_url);
        console.log(a.name);
        let movie = document.createElement('div')
        let img=document.createElement('img');
        img.src=a.poster_url;
        let name=document.createElement('p');
        name.innerHTML = a.name;
        movie.appendChild(img);
        movie.appendChild(name);
        main.appendChild(movie);
        img.classList.add('poster')
        img.style.height='400px';
        img.style.width='270px';
        img.style.objectFit='cover';
        img.style.padding='5px';
        img.style.marginTop='10px';
        img.style.marginLeft='12px';
        name.style.color='white';
        name.style.fontFamily='Verdana, Geneva, Tahoma, sans-serif';
        name.style.fontWeight='800';
        name.style.marginLeft='18px';
        name.style.marginBottom='50px';
        movie.style.width='305px';
    })
})