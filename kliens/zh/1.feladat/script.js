const divEL = document.getElementById('alapdiv');
divEL.style.backgroundColor = 'blue';
document.addEventListener('scroll', (e)=>{
    let scrollY = window.scrollY;
    let pageHeight = window.innerHeight;
    const maxY = document.documentElement.scrollHeight;
    //console.log(scrollY);
    //console.log(maxY);
    let percentage = Math.min((scrollY+pageHeight) / maxY, 1);
    divEL.style.backgroundColor = rgb(percentage*256,0,(1-percentage)*256);
})

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}