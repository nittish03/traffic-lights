let r=document.getElementById("re");
let g=document.getElementById("gr");
let y=document.getElementById("ye");
let a=document.getElementById("start");
let b=document.getElementById("end");
let d=document.getElementById("container");

let cb=document.createElement("button");
cb.setAttribute("id","reset");
cb.innerText=("RESET");

// let e=document.createElement("button")
// e.setAttribute("id","end");
// e.setAttribute("class","but");
// e.innerText=("GREEN")

// let f=document.createElement("button")
// f.setAttribute("id","start");
// f.setAttribute("class","but");
// f.innerText=("RED")

a.onclick=()=>{
        r.style.animation="animation3 2s 1s 1 normal none";
        g.style.animation=" animation1 5s 5s 1 normal none";
        y.style.animation="animation2 2s 3s 1 normal none";
        b.after(cb)
        a.remove();
        b.remove();
        }
b.onclick=()=>{
        r.style.animation="animation3 5s 5s 1 normal none";
        g.style.animation="animation1 2s 1s  1 normal none";
        y.style.animation="animation2 2s  3s 1 normal none";
        b.after(cb);
        a.remove();
        b.remove();  
        }
cb.onclick=()=>{
    document.location.reload();
    r.style.animation="";
    g.style.animation="";
    y.style.animation="";
    // cb.remove();
    // d.after(f);
    // d.after(e);
}




