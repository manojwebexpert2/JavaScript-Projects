const imageid=document.querySelector("#Image");

imageid.addEventListener('click',()=>{

    console.log(imageid.src.match);

if(imageid.src.match("OFFbulb"))
{
    imageid.src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
}
else
{
    imageid.src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
}

})