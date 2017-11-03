console.log("You are awesome!")

const availableCarsEl = document.getElementById("availableCars")

let domString = ""

idGen = function* () {
    let id = 0
    while (true) {
        yield id;
        id++
    }
}
idGenFactory = idGen 


const CarsDatabase = [
    {
        "id": 1,
        "make": "Ferrari",
        "model": "458",
        "manufactured": 2010,
        "color": "red",
        "price": 80000,
        "mileage": 3000,
        "engineSize": "V12",
        "pic": "http://blog.tomsforeign.com/wp-content/uploads/2011/01/2010-ferrari-458-italia.jpg"
    },
    {
        "id": 2,
        "make": "Corvette",
        "model": "Grand Sport Coupe",
        "manufactured": 2017,
        "color": "silver",
        "price": 55000,
        "mileage": 200,
        "engineSize": "V8",
        "pic": "https://cimg1.ibsrv.net/gimg/www.corvetteforum.com-vbulletin/2000x1124/80-2017_silver_grand_sport_coupe_a92bad7eee789b9d568e043bb9c1c9c3a2b62ede.jpg"
    }
]

CarsDatabase.forEach(car => { 
    domString += `
    <article class='car car-${car.id}'>
        <section class="car__make">
            <p>Make: ${car.make}  Model: ${car.model}</p>
        </section>
        <section class="car__price">
            <p>Price: $${car.price}</p>
        </section>
        <section class="car__picture">
            <img src='${car.pic}'>
        </section>
        <section class="car__specifications">
            <section class="car__year">
            Year: ${car.manufactured}
            </section>
            <section class="car__color">
            Color: ${car.color}
            </section>
            <section class="car__mileage">
            Mileage: ${car.mileage} miles
            </section>
            <section class="car__engineSize">
            Engine Size: ${car.engineSize}
            </section>
        </section>
    </article>
    `
})

availableCarsEl.innerHTML = domString;