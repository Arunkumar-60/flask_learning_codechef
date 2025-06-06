let array=["workout","description","image"]

// table variables
let tableimageclass="class='tableimage'"

let imageurl1="../static/img/table/2548530.png"
let imageurl2="../static/img/table/2647657.png"
let imageurl3="../static/img/table/3043290.png"



let tr1=['push-ups','A classic exercise that targets the chest, arms, and core.',
    `<img ${tableimageclass} src=${imageurl1} alt="">`]
let tr2=['squats','A lower body exercise that targets the legs and glutes.',
    `<img ${tableimageclass} src=${imageurl2} alt="">`]
let tr3=['planks','A core exercise that helps strengthen the abs and back.',
    `<img ${tableimageclass} src=${imageurl3} alt="">`]

let tabledesc=[tr1,tr2,tr3]

let headings=document.getElementById('myheadings')
headings.innerHTML = array.map(item=>`<th>${item}</th>`).join('')

let descriptions=document.getElementById('mytabledesc')
descriptions.innerHTML = tabledesc.map(item=>
    `<tr>${item.map( cell=>
        `<td>${cell}</td>`).join('')}
    </tr>`).join('')

let tips=['tip1','tip2', 'tip3']
let tipslist=document.getElementById('mytips')
tipslist.innerHTML = tips.map(item=>`<li>${item}</li>`).join('')

// testinfg for loop

//class names 
let fitness_container='fitness_container'
let fitness_heading="fitness_heading"
let fitness_content='fitness_content'
let fitness_image='fitness_image'


// content for for loop
let fitarrayheading=["foritem0","foritem1",'foritem2']
let fitarraycontent=["for0item","for1item"]
let fitarrayimage=[]
let fitlenght=Math.max(fitarrayheading.length,fitarraycontent.length,fitarrayimage.length)
let forlist=document.getElementById('fitnessforloop')


for (let i=0; i<fitlenght; i++){
    let div=document.createElement('div')
    // creating tags 
    let h1= document.createElement('h1');
    let h4= document.createElement('h4');
    let img= document.createElement('img');


    div.className=`${fitness_container}`
    h1.className=`${fitness_heading}`
    h1.textContent = fitarrayheading[i] || "default heading"
    h4.className=`${fitness_content}`
    h4.textContent=fitarraycontent[i] || "default content value"
    img.className=`${fitness_image}`
    img.src=fitarrayimage[i] || "../static/img/default_image.png"
    
    // appending data
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h4)

    forlist.appendChild(div)
}