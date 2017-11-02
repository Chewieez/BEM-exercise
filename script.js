console.log("You are awesome!")

const availableCarsEl = document.getElementById("availableCars")

let domString = ""

const CarsDatabase = {
    "Ferrari": {
        "manufactured": 2010,
        "color": "red",
        "mileage": 3000,
        "engineSize": "V12"
        "pic": "http://blog.tomsforeign.com/wp-content/uploads/2011/01/2010-ferrari-458-italia.jpg"
    },
    "Corvette": {
        "manufactured": 2017,
        "color": "silver",
        "mileage": 200,
        "engineSize": "V8"
        "pic": "https://cimg1.ibsrv.net/gimg/www.corvetteforum.com-vbulletin/2000x1124/80-2017_silver_grand_sport_coupe_a92bad7eee789b9d568e043bb9c1c9c3a2b62ede.jpg"
    }
}

