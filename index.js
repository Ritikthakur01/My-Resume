var element=document.querySelectorAll(".nav-menu a");
for(let i=0;i<element.length-1;i++){
    element[i].addEventListener('click',function(e){
        e.preventDefault()
        var targetId=this.textContent.trim().toLowerCase();
        var target=document.getElementById(targetId);
        var interval=setInterval(()=>{
            var targetCor=target.getBoundingClientRect();
            try{
            if(targetCor.top<=0){
                clearInterval(interval);
                return 
            }
            }
            catch(error){
                console.log(error);
            }
            window.scrollBy(0,40);
        },20)
    })
}
var skill_container=document.getElementById('skills-container');
var progress=document.querySelectorAll('.skill-progress>div');
window.addEventListener('scroll',checkScroll);
var animateddone=false;

function startanimationwithzero(){
    for(let bar of progress){
       bar.style.width=0+'%';
    }
}
startanimationwithzero();

function fillBars(){
    for(let bar of progress){
        let target=bar.getAttribute('data-value');
        let current=0;
        let interval=setInterval(function(){
            if(current>=target){
                clearInterval(interval)
            }
            current++;
            bar.style.width=current+"%";
        },3)
    }
}

function checkScroll(){
    var coordinates=skill_container.getBoundingClientRect();

    if(!animateddone && coordinates.top<window.innerHeight){
   		animateddone=true;
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animateddone=false;
        startanimationwithzero();
    }
}
