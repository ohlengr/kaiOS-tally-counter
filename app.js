document.addEventListener("DOMContentLoaded",function(){
  var currentUrl = window.location.href;
  console.log(window.location);
  console.log(currentUrl);
  if(currentUrl.pathname=="index.html"){
    setTimeout(()=>{
      window.location.href = "counter.html";
    },1000);
  }
});
