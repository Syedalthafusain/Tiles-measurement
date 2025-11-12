document.getElementById("calculatebtn").addEventListener("click", calculatebtn);
document.getElementById("calculatebtn2").addEventListener("click", calculatebtn2);
function calculatebtn() {
  const length = Number(document.getElementById("length").value);
  const height = Number(document.getElementById("height").value);
  const result = document.getElementById("result");
  const boxcount = (length * height) / 9;
  result.innerHTML = boxcount.toFixed(3) +" boxes";
  if (document.getElementById("length").value === ""|| document.getElementById("height").value==="") {
    result.innerHTML="Please enter Length and Height values";
    
  }
}

function calculatebtn2() {
  const length = Number(document.getElementById("length2").value);
  const height = Number(document.getElementById("height2").value);
  const result = document.getElementById("result2");
  const boxcount = (length * height) / 10;
  result.innerHTML = boxcount.toFixed(3) +" boxes";
   if (document.getElementById("length2").value === ""|| document.getElementById("height2").value==="") {
    result2.innerHTML="Please enter Length and Height values";
   }
}
