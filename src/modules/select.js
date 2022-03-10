
const select = () => {
    const sel = document.getElementById('cars');
    const text = document.querySelector('.text');

    const getData = () => {
        fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1646917199&s=orTpab35regXD8SQ-eGyOQ')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let selected = sel.options[sel.selectedIndex].value;
                console.log(selected)
                let cars = data.cars;
                cars.forEach(car => {
                    if (car.brand === selected) {
                        console.log('ok')
                        text.innerHTML = `Тачка ${car.brand} ${car.model} <br>
                        Цена: ${car.price}$`
                    }
                })
            })
            .catch(error => {
                console.log(`Ошибка - ${error.message}`)
            })

}

sel.addEventListener('change', () => {
    getData()
})




/*let ttt = getData().then(response => {
    console.log(response.json())
})*/

}

export default  select;