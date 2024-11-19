const g=document.getElementById("grandparent")
g.addEventListener("click",()=>{
    setTimeout(()=>{
    console.log("grandparent clicked")
    g.style.backgroundColor="pink"
 },1000)
},true)
const p=document.getElementById("parent")
p.addEventListener("click",()=>{
 setTimeout(()=>{
    console.log("parent clicked")
    p.style.backgroundColor="red"
 },2000)
},false)
const c=document.getElementById("child")
c.addEventListener("click",()=>{
setTimeout(()=>{
    console.log("child clicked")
     c.style.backgroundColor="orange"
},3000)
},false)


const gpt=document.getElementById("gp")
gpt.addEventListener("click",()=>
{
    console.log("grandparent clicked")
    gpt.style.backgroundColor="pink"
 })
const pa=document.getElementById("p")
pa.addEventListener("click",()=> {
console.log("parent clicked")
 pa.style.backgroundColor="red"
 })

const ch=document.getElementById("c")
ch.addEventListener("click",()=>{
console.log("child clicked")
ch.style.backgroundColor="orange"
})

const gdpt=document.getElementById("gdpt")
gdpt.addEventListener("click",()=>
{
    console.log("grandparent clicked")
    gdpt.style.backgroundColor="pink"
 })
const pt=document.getElementById("pt")
pt.addEventListener("click",(w)=> {
    w.stopPropagation()
console.log("parent clicked")
 pt.style.backgroundColor="red"
 })

const cd=document.getElementById("cd")
cd.addEventListener("click",(e)=>{
    e.stopPropagation()
console.log("child clicked")
cd.style.backgroundColor="orange"
})


