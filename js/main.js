    /* animations et effet global */

    //effet underline sur les rubriques du header
    var nav_link=document.querySelectorAll("header nav a");
    var nav_underline=document.querySelectorAll("header nav a span");
    for (let i = 0; i < nav_link.length; i++) {
        nav_link[i].addEventListener("mouseover",(e)=>{
            nav_underline[i].style.width="100%";
            e.target.style.fontWeight="bolder"
        }); 
        nav_link[i].addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
            e.target.style.fontWeight=""
        });
    }

    //  le button scroll vers le haut et vers le form
    var scroll_to_top=document.querySelector("#scroll_to_top");
    var scroll_to_form=document.querySelector("#scroll_to_form");
    if(scroll_to_form!=null)scroll_to_form.style.cursor="pointer";
    if(scroll_to_top!=null)scroll_to_top.style.cursor="pointer";
    if(scroll_to_top!=null)scroll_to_top.addEventListener("click",  function() {
        window.scrollTo(4,document.body.scrollHeight);
    });

    if(scroll_to_form!=null)scroll_to_form.addEventListener("click",  function() {
        window.scrollTo(4,document.body.scrollHeight);
    });



    // effet fade in sur les titres
    var titres=document.querySelectorAll(".titre");   
    var description=document.querySelector(".description");
    var text=["BATMAN AU CINÉMA","NÉMÉSIS","MULTIMÉDIA"];
    var fleche=document.querySelector(".image-scroll-btn div  img");
    function fadeIn() {
        description.style.transform="translateX(0)";
        fleche.style.transform="translate(0)";
        for (let i = 0; i < titres.length; i++) {
            titres[i].style.transform="translate(0)";
            titres[i].style.opacity="1";
            titres[i].textContent=text[i];
        }
        blockInFade.style.transform="translateX(10px)";
        for (let i = 0; i < imgZoom.length; i++) {
            imgZoom[i].style.transform="scale(1)";
        }
    }
    window.onload=fadeIn;

    // effet opacity en 100% sur les soustitres
    var sousTitres=document.querySelectorAll(".sousTitres");
   /*  window.onload=animeFadeIn; */

    // faire apparaitre des contours
    var countour_left=document.querySelector(".contour_left");

    /* Animations et effets dans le page home */

    // les boutons voir les adversaires et les heros
    var herosBtn=document.querySelector("heroBtn");
    var adveBtn=document.querySelector("adveBtn");

    if(herosBtn!=null && hero!=undefined){

    }
    if(herosBtn!=null && hero!=undefined){
            
    }
    
    // les images doit apparaitre de zoom 0% a 100%
    var blockInFade=document.querySelector(".blockInFade");
    var imgZoom=document.querySelectorAll(".imgZoom");
    var descriPersonnage=document.querySelectorAll(".personnage-description");
    blockInFade.style.transition="1s"
    for (let i = 0; i < imgZoom.length; i++) {
        imgZoom[i].addEventListener("mouseover",function(){
            descriPersonnage[i].style.bottom="-10px"
            descriPersonnage[i].style.overflow="visible"
        });
        imgZoom[i].addEventListener("mouseout",function(){
            descriPersonnage[i].style.bottom="";
            descriPersonnage[i].style.overflow="hidden "
        });
    }
    // les images en slider
    var slider_content=document.querySelectorAll(".slide-content");
    var counter=0;
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
    var point=document.querySelectorAll(".pointPoint span");
    var citations=document.querySelectorAll(".citations");
    var counter2=0;
    setInterval(function () {
        document.querySelector(".pointActive").classList.remove("pointActive");
        point[counter2].classList.add("pointActive");
        document.querySelector(".citations-active").classList.remove("citations-active");
        citations[counter2].classList.add("citations-active");
        counter2++;
        if(counter2==point.length){counter2=0;
        }
    },3000);

    // les images en slider
    var slider_content=document.querySelectorAll(".slide-content");
    var counter=0;
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
    var urlBg=[""]