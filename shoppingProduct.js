function ajax(){
    const xhttp = new XMLHttpRequest()
    const url = 'shoppingProduct.html'
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementById("allProducts").innerHTML = this.responseText
  }
}
  xhttp.open("GET", url, true);
  xhttp.send()
}

