import { navbar } from "../Components/nav.js";

let nav_div = document.getElementById("mnav")
nav_div.innerHTML = navbar()


import { footer } from "../Components/footerr.js";

let fot = document.getElementById('footer')
fot.innerHTML = footer()






const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function () {
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function () {
    sideMenu.classList.remove('active')
})









// Fetching data by search button and with a input value


let btn = document.getElementById('search')
btn.onclick = () => {
    Getdata()
}


let id = "b86cc9a0";
let api_key = "b1aed1fd6b1dd3d7d6928a09b2440f5f";

const Getdata = async () => {
    let query = document.getElementById("jobse").value


    try {
        let response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${id}&app_key=${api_key}&what_phrase=${query}`)
        let data = await response.json()
        console.log(data)
        Append(data.results)
    }
    catch (error) {
        console.log(error)
    }
}


// // Fetching the data according to the "selected" timimgs (like parttime, fulltime).


// let selectvalue = document.getElementById("selectvalue");
// selectvalue.onchange = () => {
//     AccordingtoValue()
// }

// const AccordingtoValue = async () => {
//     //let random=document.getElementById('random').value;
//     let parttime = document.getElementById("selectvalue").value;

//     try {
//         let response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${id}&app_key=${api_key}&part_time=${parttime}`)
//         let data = await response.json()
//         console.log(data)
//         Append(data.results)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// let Countries = document.getElementById("Countries");
// Countries.onchange = () => {
//     AccordingtoCountries()
// }

// const AccordingtoCountries = async () => {

//     //let random=document.getElementById('random').value;

//     let country = document.getElementById("Countries").value;

//     try {
//         let response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${id}&app_key=${api_key}&where=${country}`)
//         let data = await response.json()
//         console.log(data)
//         Append(data.results)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }



// let Stream = document.getElementById("stream");
// Stream.onchange = () => {
//     AccordingtoStream()
// }

// const AccordingtoStream = async () => {

//     let nameofStream = document.getElementById("stream").value;

//     try {
//         let response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${id}&app_key=${api_key}&what=${nameofStream}`)
//         let data = await response.json()
//         console.log(data)
//         Append(data.results)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


let Selectvalue = document.getElementById("selectvalue");
Selectvalue.onchange = () => {
    Overallsection()
}

let Streams = document.getElementById("stream");
Streams.onchange = () => {
    Overallsection()
}

let countries = document.getElementById("Countries");
countries.onchange = () => {
    Overallsection()
}


const Overallsection = async () => {

    let nameofStream = document.getElementById("stream").value;

    let country = document.getElementById("Countries").value;

    let parttime = document.getElementById("selectvalue").value;

    try {
        let response = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${id}&app_key=${api_key}&what=${nameofStream}&where=${country}&part_time=${parttime}`)
        let data = await response.json()
        console.log(data)
        Append(data.results)
    }
    catch (error) {
        console.log(error)
    }
}




let container = document.getElementById('rightcontainer')
const Append = (Original) => {
    container.innerHTML = null

    Original.forEach((el) => {
        let maindiv = document.createElement('div')
        maindiv.setAttribute("class", "maindiv")

        let div1 = document.createElement('div')
        div1.setAttribute("class", "card")

        let title = document.createElement('h3')
        title.setAttribute('class', "title")
        title.innerText = el.title;

        let desc = document.createElement('p')
        desc.setAttribute('class', "decs")
        desc.innerText = el.description

        let btn = document.createElement('button')
        btn.setAttribute("class", "cardbtn")
        btn.innerText = "VIEW AND APPLY";
        btn.addEventListener("click", () => {
            TransferStream(el)
        })

        let stipend = document.createElement('p')
        stipend.setAttribute("class", "stipend")
        stipend.innerText = "Stipend: " + el.salary_min + " - " + el.salary_max + " per month";

        let status = document.createElement('p')
        // status.innerText = el.contract_time;
        if (el.contract_time == null) {
            status.innerText = "full_time";
        } else {
            status.innerText = el.contract_time;
        }

        let place = document.createElement('p')
        place.setAttribute("class", "place")
        place.innerText = el.location.display_name;

        let div2 = document.createElement('div')
        div2.setAttribute("class", "btnandimg")

        let week = document.createElement('p')
        week.innerText = "2 weeks left"

        let img = document.createElement('p')
        img.innerHTML = `<i class="fa-solid fa-share-nodes"></i>`;
        img.setAttribute("class", "share")

        let line = document.createElement('hr')
        line.setAttribute("class", "hr")
        div1.append(title, desc, place, status, stipend, line)
        div2.append(week, img, btn)
        maindiv.append(div1, div2)
        container.append(maindiv)
    });

}



const TransferStream = (data) => {
    localStorage.setItem("element", JSON.stringify(data))
    window.location.href = "./overview.html"
}