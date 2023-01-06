const q=document.querySelectorAll(".questions");
const ans=document.querySelectorAll(".ans");
let openans=-1;
q.forEach((ques,n)=>{
    ques.addEventListener("click", function() {
        if(openans!=-1){
            ans[openans].style.display='none';
            q[openans].children[1].setAttribute("src","imgs\\plus.png")
            console.log("closed"+openans);
        }
        if (ans[n].style.display ==='none'&&n!=openans) {
            ans[n].style.display = 'block';
            q[n].children[1].setAttribute("src","imgs\\close.png")
            openans=n;
            console.log("open"+openans);
          } else {
           openans=-1;

          }
      });
});
