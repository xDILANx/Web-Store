/*const fa = document.querySelector(".fa")
const fas = document.querySelector(".fas")


fa.addEventListener("click", function () {
  document.getElementById("menu-lateral").classList.toggle("abrir")
  document.getElementById("logo").classList.toggle("moveRight")
})

fas.addEventListener("click", function () {
  document.getElementById("shoppingCart").classList.toggle("open")
  document.getElementById("logo").classList.toggle("moveLeft")
})*/


function ajax(url){
    const xhttp = new XMLHttpRequest()
    //const url = 'productsWoman.html';
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("products").innerHTML = this.responseText
  }
}
  xhttp.open("GET", url, true);
  xhttp.send()
}
const url = 'productsWoman.html'
document.getElementById("woman").addEventListener("click",function(){
  ajax(url)
})

const url1 = 'productsMan.html'
document.getElementById("man").addEventListener("click",function(){
  ajax(url1)
})

const url2 = 'productsKid.html'
document.getElementById("kid").addEventListener("click",function(){
  ajax(url2)
})

//----------------------------------------------------------------------------------------

document.getElementById('textMan').addEventListener('click', e =>{
  ajax(url1)
})
document.getElementById('textWoman').addEventListener('click', e =>{
  ajax(url)
})
document.getElementById('textKid').addEventListener('click', e =>{
  ajax(url2)
})

//----------------------------------------------------------------------------------------------
function productsMan(){
  const xhttp = new XMLHttpRequest()
  const url = 'shoppingProduct.html'
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
          console.log(this.responseText);
          document.getElementById("products").innerHTML = this.responseText
        }
      }
      xhttp.open("GET", url, true);
      xhttp.send()
    }






/*function ajax(){
  const xhttp = new XMLHttpRequest();
  const url = 'productsWoman.html';

  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
          console.log(this.responseText);
          document.getElementById("products").innerHTML = this.responseText;
}
}
xhttp.open("GET", url, true);
xhttp.send();
}*/


