// function myFunction(myDiv) {
//     var x = document.getElementById(myDiv);
//     if (x.style.display === "none") {
//         x.style.display = "flex";
//     } else {
//         x.style.display = "none";
//     }
//     }

    // var elements = document.getElementsByClassName("btn");
    // for(var i = 0 ; i < elements.length ; i++){
    //     elements[i].onclick = function(){
    //         var el = elements[0];
    //         while(el){
    //             if(el.tagName == "LI"){
    //                 el.classList.remove("bak");
    //             }
    //             el = el.nextSibling;
    //         }
    //         this.classList.add("bak");
            
    //     }
    // }


    function show(){
        document.getElementById('sidebar').classList.toggle('active');
    }



const btns = document.querySelectorAll('.btn');
const about = document.querySelector('.about');
const boxes = document.querySelectorAll('.Box');


about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    console.log(id)
    if(id !== undefined){
        //remove active1 from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active1");
            e.target.classList.add("active1");
        });
        //hide other articiles
        boxes.forEach(function (boxes){
            boxes.classList.remove("active1");
        });
        const element = document.getElementById(id);
        element.classList.add("active1");
    }
});


