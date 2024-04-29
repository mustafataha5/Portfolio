let i_am_arr = ["Developer.","Blogger.","Web Designer."] ; 
let len = i_am_arr.length ; 
let count = 0 ;
let count_t = 0 ;  
i_am_text = document.querySelector("#home_i_am > span") 
i_am_text.innerText = "" ; 

let aa = document.querySelector("#a_about") ; 

// console.log(aa);
// console.log(aa.parentElement.classList.add('active'))
// //aa.classList.add("active") ; 
// console.log(aa.classList);





setInterval(function(){
    
    if(count_t < i_am_arr[count%len].length){
        i_am_text.innerHTML += i_am_arr[count%len][count_t]; 
        //console.log(i_am_text.innerText);
        count_t++;
    }
    else{
        count++ ; 
        count_t = 0 ; 
        i_am_text.innerText =" " ; 
    }
},300);


let divs = document.querySelectorAll("div[id]");
