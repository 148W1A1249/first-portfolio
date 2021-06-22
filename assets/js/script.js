var data = [
  {
    type:"work_tab",    
    title:"Spotify",
    languages: "Html,Css,javascript",
    image:"./assets/images/spotify.png",
    link:"https://spotify-my-self-beaware.netlify.app/",
    note: ["Note: ","only web"],
  },
  {
    type:"freelancer_tab",   
    title:"",
    languages: "",
    image:"./assets/images/404_page_cover.jpg",
    link:"#",
    note: ["Note: ",""],
  },
  {
    type:"work_tab",  
    title:"",
    languages: "",
    image:"./assets/images/404_page_cover.jpg", 
    link:"#",
    note: ["Note: ",""],
  },
  {
    type:"work_tab", 
    title:"",
    languages: "",
    image:"./assets/images/404_page_cover.jpg",  
    link:"#",
    note: ["Note: ",""],
  },
  {
    type:"freelancer_tab", 
    title:"",
    languages: "",
    image:"./assets/images/404_page_cover.jpg",  
    link:"#",
    note: ["Note: ",""],
  },
]
if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 200,
    });
}

function openPage(pageName,btn_id) {
  var i, tabcontent,btn_link;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }  
  btn_link = document.getElementsByClassName("btn_link");
  for (i = 0; i < btn_link.length; i++) {
    btn_link[i].style.border = "none";
  } 
  document.getElementById(pageName).style.display = "block";
  document.getElementById(btn_id).style.borderBottom = "1px solid #04AA6D";
  document.getElementById(pageName).innerHTML=""
  workContentShow(pageName);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("btn_work").click();

function workContentShow(params){
  var div = document.createElement("div")
  div.className = "grid-container";
   var input =  AddSheets(params);
   div.innerHTML=input;
  if(params=="All_tab"){
    var All_tab = document.querySelector("#All_tab");
    All_tab.appendChild(div);
  }else{
    var All_tab = document.querySelector("#All_tab");
    All_tab.innerHTML="";
  }
  if(params=="work_tab"){
    var work_tab = document.querySelector("#work_tab");
    work_tab.appendChild(div);
  }else{
    var work_tab = document.querySelector("#work_tab");
    work_tab.innerHTML="";
  }
  if(params=="freelancer_tab"){
    var freelancer_tab = document.querySelector("#freelancer_tab");
    freelancer_tab.appendChild(div);;
  }else{
    var freelancer_tab = document.querySelector("#freelancer_tab");
    freelancer_tab.innerHTML="";
  }
}
function AddSheets(params){
  let output = "";
  if(params==="All_tab"){    
    data.map(obj=>{
      output += `
      <div class="cardContainer">
        <img src="${obj.image}" alt="Avatar" class="card_image" style="width:100%;height:150px">
        <div class="card_middle">
          <div class="card_text">
          <h1><a href="${obj.link}" style="text-decoration: none;">${obj.title}</a></h1>
          <p><strong>used Languages:</strong> ${obj.languages}</p>
          <p style="color:red"><strong>${obj.note[0]}</strong> ${obj.note[1]}</p>
          </div>
        </div>
      </div>
      `
    })
  }
  



if(params==="work_tab"){
  data.filter(obj=>{
    if(obj.type ==="work_tab"){
      output += `
        <div class="cardContainer">
          <img src="${obj.image}" alt="Avatar" class="card_image" style="width:100%;height:150px">
          <div class="card_middle">
            <div class="card_text">
            <h1><a href="${obj.link}" style="text-decoration: none;">${obj.title}</a></h1>
            <p><strong>used Languages:</strong> ${obj.languages}</p>
            <p style="color:red"><strong>${obj.note[0]}</strong> ${obj.note[1]}</p>
            </div>
          </div>
        </div>
        `
    }
  })
}
if(params==="freelancer_tab"){
  data.filter(obj=>{
    if(obj.type ==="freelancer_tab"){
      output += `
        <div class="cardContainer">
          <img src="${obj.image}" alt="Avatar" class="card_image" style="width:100%;height:150px">
          <div class="card_middle">
            <div class="card_text">
                <h1><a href="${obj.link}" style="text-decoration: none;">${obj.title}</a></h1>
                <p><strong>used Languages:</strong> ${obj.languages}</p>       
                <p style="color:red"><strong>${obj.note[0]}</strong> ${obj.note[1]}</p>
            </div>
          </div>
        </div>
        `
    }
  })
}
  
  return output;
}