let course=[
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
desti:"IT Starter Pack (4 Courses)\nLearn the most demanded skills in the IT industry today. Sig ...",
description:"Learn the most demanded skills in the IT industry today. Sig ...",
EMI:"EMI Starting at ₹ 915/month",
old_price:"₹ 32999",
new_price:"₹ 15999",
title:"IT Starter Pack (4 Courses)"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
desti:"Digital Marketing Course\nLearn the art of digital marketing. Sign up for this online ...",
description:"Learn the art of digital marketing. Sign up for this online ...",
EMI:"EMI Starting at ₹ 343/month",
old_price:"₹ 11999",
new_price:"₹ 5999",
title:"Digital Marketing Course"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
desti:"Data Analytics With R Programming Course\nLearn data science online. Join this online data analytics c ...",
description:"Learn data science online. Join this online data analytics c ...",
EMI:"EMI Starting at ₹ 343/month",
old_price:"₹ 11999",
new_price:"₹ 5999",
title:"Data Analytics With R Programming Course"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/web-development-course.png",
desti:"Web Development Course\nLearn the art of web design and web development. Join this o ...",
description:"Learn the art of web design and web development. Join this o ...",
EMI:"EMI Starting at ₹ 229/month",
old_price:"₹ 7999",
new_price:"₹ 3999",
title:"Web Development Course"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/tally-gst-course.png",
desti:"Tally + GST Course\nSign up for this online tally and gst course and learn how t ...",
description:"Sign up for this online tally and gst course and learn how t ...",
EMI:"EMI Starting at ₹ 229/month",
old_price:"₹ 7999",
new_price:"₹ 3999",
title:"Tally + GST Course"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
desti:"Android App Development Using Kotlin Course\nLearn the art of android app design and web development. Joi ...",
description:"Learn the art of android app design and web development. Joi ...",
EMI:"EMI Starting at ₹ 229/month",
old_price:"₹ 7999",
new_price:"₹ 3999",
title:"Android App Development Using Kotlin Course"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/advanced-excel-course.png",
desti:"Advanced Excel Course\nMaster MS Excel. Take the online ms excel course and learn t ...",
description:"Master MS Excel. Take the online ms excel course and learn t ...",
EMI:"EMI Starting at ₹ 172/month",
old_price:"₹ 5999",
new_price:"₹ 2999",
title:"Advanced Excel Course"
},
{
image:"https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
desti:"R Programming Course\nLearn r programming online. Sign up for this online r progra ...",
description:"Learn r programming online. Sign up for this online r progra ...",
EMI:"EMI Starting at ₹ 172/month",
old_price:"₹ 5999",
new_price:"₹ 2999",
title:"R Programming Course"
}
]

appendData(course)

// image:"https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
// desti:"IT Starter Pack (4 Courses)\nLearn the most demanded skills in the IT industry today. Sig ...",
// description:"Learn the most demanded skills in the IT industry today. Sig ...",
// EMI:"EMI Starting at ₹ 915/month",
// old_price:"₹ 32999",
// new_price:"₹ 15999",
// title:"IT Starter Pack (4 Courses)"

function appendData(course){
    let container=document.getElementById("container");
    container.innerHTML=null
    course.forEach((el)=>{

let div=document.createElement("div");

let img=document.createElement("img");
img.src=el.image;
// img.style.width="200px"

let title=document.createElement("h4")
title.innerText=el.title;
let desc=document.createElement("p");
desc.innerText=el.description;

let line=document.createElement("hr");
line.style.border="dotted"
line.style.color="gray"
// price
let div2=document.createElement("div");
let op=document.createElement("p");
op.innerText=el.old_price;
let np=document.createElement("h3");
np.innerText=el.new_price;
div2.append(op,np);

let emi=document.createElement("h4");
emi.innerText=el.EMI;
emi.setAttribute("class","emi1")
emi.style.color="#ffb33e"

// button
let div3=document.createElement("div");
let know=document.createElement("a");
know.innerText="KNOW MORE";
let adc=document.createElement("button");
adc.innerText="ADD TO CART";
// adc.style.backgroundColor="red"
// adc.style.color="white"
// adc.style.borderRadius="4px"
div3.append(know,adc);

// apend all inside card
div.append(img,title,desc,line,div2,emi,div3);
container.append(div)

    })
}