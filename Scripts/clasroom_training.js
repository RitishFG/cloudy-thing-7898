let online_course=[
{
image:"https://assets.interntheory.com/courses/banner/1573118304.png",
title:"Offline Digital Marketing Course",
description:"Learn the art of digital marketing. Sign up for this offline ...",
old_price:"₹ 19999",
new_price:"₹ 9999",
EMI:"EMI Starting at ₹ 572/monthhelp_outline"
},
{
image:"https://assets.interntheory.com/courses/banner/1573120159.png",
title:"Offline Stock Market Course",
description:"Learn how to trade and invest in stock markets. Enroll for t ...",
old_price:"₹ 19999",
new_price:"₹ 9999",
EMI:"EMI Starting at ₹ 572/monthhelp_outline"
},
{
image:"https://assets.interntheory.com/courses/banner/1573120767.png",
title:"Offline Tally + GST Course",
description:"Sign up for this offline tally and GST course and learn how ...",
old_price:"₹ 15999",
new_price:"₹ 7999",
EMI:"EMI Starting at ₹ 458/monthhelp_outline"
},
{
image:"https://assets.interntheory.com/courses/banner/1573120508.png",
title:"Offline Advanced Excel Course",
description:"Master MS Excel. Take the offline ms excel course and learn ...",
old_price:"₹ 19999",
new_price:"₹ 5999",
EMI:"EMI Starting at ₹ 343/monthhelp_outline"
}
]
appendData(online_course)
// image:"https://assets.interntheory.com/courses/banner/1573118304.png",
// title:"Offline Digital Marketing Course",
// description:"Learn the art of digital marketing. Sign up for this offline ...",
// old_price:"₹ 19999",
// new_price:"₹ 9999",
// EMI:"EMI Starting at ₹ 572/monthhelp_outline"


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
op.style.textDecoration="line-through"
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
know.style.color="#3d95e1";
know.style.padding="10px"
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

