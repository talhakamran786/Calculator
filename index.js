
 function ADD(){
    var Data1 = document.getElementById("type").value;
    var Data2 = document.getElementById("type2").value;
    var Result = Number(Data1) + Number(Data2);    
    document.getElementById("Result").innerText = Result;
}
   

// document.getElementById(type2).value = document.getElementById(type2).value + "2"
// document.getElementById(type2).value += "2"

function SUBTRACT(){
    var Data1 = document.getElementById("type").value;
    var Data2 = document.getElementById("type2").value;
    var Result  = Number(Data1)-Number(Data2)
   document.getElementById("Result").innerText = Result;
    
}


function MULTIPLY(){
    var Data1 = document.getElementById("type").value;
    var Data2 = document.getElementById("type2").value;
    var Result  = Number(Data1)*Number(Data2)
   document.getElementById("Result").innerText = Result;
    
}



function DIVIDE(){
    var Data1 = document.getElementById("type").value;
    var Data2 = document.getElementById("type2").value;
    // var Result  = Number(Data1) / Number(Data2)
   document. getElementById("Result").innerText = Result;
    
}

function CLEAR(){
   
   document.getElementById("type2").value = "";
   document.getElementById("Result").innerText = "0.00";

}

function Calculate(){

  var MyData = document.getElementById('type2').value;
  MyData = eval(MyData)
  
  if(MyData === undefined){
      document.getElementById('Result').innerText = "XXX"
  }
  else{
  document.getElementById('Result').innerText = MyData;
  }
}
  function dlt(){
      var mydata2 = document.getElementById("type2").value;
      console.log(mydata2)
      
    //    = '';
      
      console.log(mydata2[(mydata2.length-1)])

      

      
  
  
    } 
  



