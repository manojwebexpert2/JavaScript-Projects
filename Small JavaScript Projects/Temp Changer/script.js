

function submitme(e)
{

    

    const vType=document.querySelector('#vType').value;   

    const temp=document.querySelector('#temp').value;

    //console.log(vType);

//console.log(temp);

//return false;

    let result='';
    if(vType=="c")
    {
        result= ((temp * 9.0 / 5.0) + 32.0)+ "C";
        
    }
    else
    {
        result=(temp-32) * 5/9 +" F";
    }

    //× 9/5) + 32 = °F
    
//document.getElementById('result').innerHTML(result);
document.getElementById("result").innerHTML = result;
//console.log(result);


}