document.addEventListener("DOMContentLoaded",function(){
  var pathname = window.location.pathname;
  if(pathname.includes("index.html")){
    setTimeout(()=>{
      window.location.href = "counter.html";
    },1000);
  }else if(pathname.includes("counter.html")){
    var btn = document.getElementById("action-btn");
    var digit = document.getElementById("digit-text");
    var reset = document.getElementById("reset-btn");
    var counter = 0;
    if(!btn){
      return;
    }
    btn.addEventListener('click', function(){
      counter++;
      if(counter<=99999){
        digit.innerHTML = counter;
      }
    });
    reset.addEventListener('click', function(){
      window.location.reload();
    });
  }
});
