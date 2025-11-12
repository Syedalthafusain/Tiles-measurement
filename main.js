document.getElementById("calculatebtn").addEventListener("click", calculatebtn);
document.getElementById("calculatebtn2").addEventListener("click", calculatebtn2);
document.getElementById("calculatebtn3").addEventListener("click", calculatebtn3);
document.getElementById("calculatebtn4").addEventListener("click", calculatebtn4);
document.getElementById("calculatebtn5").addEventListener("click", calculatebtn5);
document.getElementById("calculatebtn6").addEventListener("click", calculatebtn6);

function calculatebtn() {
  const length = Number(document.getElementById("length").value);
  const height = Number(document.getElementById("height").value);
  const result = document.getElementById("result");
  const boxcount = (length * height) / 9;
  result.innerHTML = boxcount.toFixed(1) +" boxes";
  if (document.getElementById("length").value === ""|| document.getElementById("height").value==="") {
    result.innerHTML="Please enter Length and Height values";
    
  }
}

function calculatebtn2() {
  const length = Number(document.getElementById("length2").value);
  const height = Number(document.getElementById("height2").value);
  const result = document.getElementById("result2");
  const boxcount = (length * height) / 10;
  result.innerHTML = boxcount.toFixed(1) +" boxes";
   if (document.getElementById("length2").value === ""|| document.getElementById("height2").value==="") {
    result2.innerHTML="Please enter Length and Height values";
   }
}

function calculatebtn3() {
  const length = Number(document.getElementById("length3").value);
  const height = Number(document.getElementById("height3").value);
  const result = document.getElementById("result3");
  const boxcount = (length * height) / 16;
  result.innerHTML = boxcount.toFixed(1) +" boxes";
   if (document.getElementById("length1").value === ""|| document.getElementById("height3").value==="") {
    result3.innerHTML="Please enter Length and Height values";
   }
}

function calculatebtn4() {
  const length = Number(document.getElementById("length4").value);
  const height = Number(document.getElementById("height4").value);
  const result = document.getElementById("result4");
  const boxcount = (length * height) / 28.44;
  result.innerHTML = boxcount.toFixed(1) +" boxes";
   if (document.getElementById("length4").value === ""|| document.getElementById("height4").value==="") {
    result4.innerHTML="Please enter Length and Height values";
   }
}

function calculatebtn5() {
  const length = Number(document.getElementById("length5").value);
  const height = Number(document.getElementById("height5").value);
  const result = document.getElementById("result5");
  const boxcount = (length * height) / 24;
  result.innerHTML = boxcount.toFixed(1) +" boxes";
   if (document.getElementById("length5").value === ""|| document.getElementById("height5").value==="") {
    result5.innerHTML="Please enter Length and Height values";
   }
}

function calculatebtn6() {
  const length = Number(document.getElementById("length6").value);
  const height = Number(document.getElementById("height6").value);
  const result = document.getElementById("result6");
  const boxcount = (length * height) / 21.333;
  result.innerHTML = boxcount.toFixed(1) +" boxes";
   if (document.getElementById("length6").value === ""|| document.getElementById("height6").value==="") {
    result6.innerHTML="Please enter Length and Height values";
   }
}