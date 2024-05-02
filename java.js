if (document.getElementById("button1")) {
    
    var modal = document.getElementById("myModal");
    var button = document.getElementById("button1");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementById("body");
    
    
    button.onclick= function(){

        modal.style.display= "block";
        modal.style.position= "static";
        modal.style.height= "100%";
        modal.style.overflow= "hidden";
        
        
    }
    span.onclick= function () {

        modal.style.display= "none";
            modal.style.position= "inherit";
            modal.style.height= "auto";
            modal.style.overflow= "visible";
    }
}