    /* animations et effet global */

    //effet underline sur les rubriques du header
    let link=document.querySelectorAll("header nav a");
    let underline=document.querySelectorAll("header nav a span");
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("mouseover",(e)=>{
            underline[i].style.width="100%";
            e.target.style.fontWeight="bolder"
        }); 
        
        link[i].addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("active")==false)underline[i].style.width="0";
            e.target.style.fontWeight=""
        });
    }

    //  le button scroll vers le haut et vers le form
    let top=document.querySelector("#scroll_to_top");
    let form=document.querySelector("#scroll_to_form");
    if(form!=null)form.style.cursor="pointer";
    if(top!=null)top.style.cursor="pointer";
    if(top!=null)top.addEventListener("click",  function() {
        window.scrollTo(4,document.body.scrollHeight);
    });

    if(form!=null)form.addEventListener("click",  function() {
        window.scrollTo(4,document.body.scrollHeight);
    });



    // effet fade in sur les titres
    let title=document.querySelectorAll(".titre");   
    let description=document.querySelector(".description");
    let text_=["BATMAN AU CINÉMA","NÉMÉSIS","MULTIMÉDIA"];
    let arrow=document.querySelector(".image-scroll-btn div  img");
    function scrollingX() {
        description.style.transform="translateX(0)";
        arrow.style.transform="translate(0)";
        for (let i = 0; i < title.length; i++) {
            title[i].style.transform="translate(0)";
            title[i].style.opacity="1";
            title[i].text_Content=text_[i];
        }
        blockInFade.style.transform="translateX(10px)";
        for (let i = 0; i < scale_img.length; i++) {
            scale_img[i].style.transform="scale(1)";
        }
    }
    window.onload=scrollingX;

    // effet opacity en 100% sur les soustitres
    let subTitle=document.querySelectorAll(".sousTitres");
   /*  window.onload=animeFadeIn; */

    // faire apparaitre des contours
    let outileLeft=document.querySelector(".contour_left");

    /* Animations et effets dans le page home */

    // les boutons voir les adversaires et les heros
    let btn_1=document.querySelector("heroBtn");
    let btn_2=document.querySelector("adveBtn");

    if(btn_1!=null && hero!=undefined){

    }
    if(btn_1!=null && hero!=undefined){
            
    }
    
    // les images doit apparaitre de zoom 0% a 100%
    let blockInFade=document.querySelector(".blockInFade");
    let scale_img=document.querySelectorAll(".imgZoom");
    let descriPersonnage=document.querySelectorAll(".personnage-description");
    blockInFade.style.transition="1s"
    for (let i = 0; i < scale_img.length; i++) {
        scale_img[i].addEventListener("mouseover",function(){
            descriPersonnage[i].style.bottom="-10px"
            descriPersonnage[i].style.overflow="visible"
        });
        scale_img[i].addEventListener("mouseout",function(){
            descriPersonnage[i].style.bottom="";
            descriPersonnage[i].style.overflow="hidden "
        });
    }
    // les images en slider
    let slider_content=document.querySelectorAll(".slide-content");
    let counter=0;
    setInterval(function () {
        for (let i = 0; i < slider_content.length; i++) {
            slider_content[i].style.transform="translateX(-100%)";
        }
        slider_content[counter].style.display="flex";
        slider_content[counter].style.transform="translateX(0%)" 
        counter++;
        if(counter==3){counter=0;}  
    },3000);


    // animation au niveau du footer avec lespoint et les slider
    let point=document.querySelectorAll(".pointPoint span");
    let citations=document.querySelectorAll(".citations");
    let timer=0;
    setInterval(function () {
        document.querySelector(".pointActive").classList.remove("pointActive");
        point[timer].classList.add("pointActive");
        document.querySelector(".citations-active").classList.remove("citations-active");
        citations[timer].classList.add("citations-active");
        timer++;
        if(timer==point.length){timer=0;
        }
    },3000);

    // les images en slider
    let slider_content=document.querySelectorAll(".slide-content");
    let counter=0;
    setInterval(function () {
        for (let i = 0; i < slider_content.length; i++) {
            slider_content[i].style.transform="translateX(-200%)";
        }
        slider_content[counter].style.display="flex";
        slider_content[counter].style.transform="translateX(0%)" 
        counter++;
        if(counter==3){counter=0;}
    
    },3000);


    /* (function (params) {
       document.documentElement.style.opacity="0.8" 
    })() */
    //background qui change a chaque 3s
    let urlBg=[""]
