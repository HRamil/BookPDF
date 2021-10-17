setInterval( slide ,500)
let _1_ = window.innerWidth/100
let _20_  = window.innerWidth/100*20
let _70_ =  window.innerWidth/100*70
let _50_ = window.innerWidth/100*50
function slide(){
    for(let i=1;i<=document.getElementById("slide").childElementCount;i++ ){
        let id = "img"+i;
        let height = 3 , top = 0.5;

        document.getElementById(id).style.left = document.getElementById(id).offsetLeft - _1_ + "px"
        if(document.getElementById(id).offsetLeft <= _20_){
            document.getElementById(id).style.left = _70_ + "px"
        }
        if(document.getElementById(id).offsetLeft<= _50_){
            height = -3 , top = -0.5;
        }
        document.getElementById(id).style.height =  document.getElementById(id).clientHeight + height + "px"
        
    }
    console.log(document.getElementById("img1").offsetLeft )

    
}
