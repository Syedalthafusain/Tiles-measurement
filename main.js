document.getElementById("calculatebtn").addEventListener("click", calculatebtn);
function calculatebtn() {
  const length = Number(document.getElementById("length").value);
  const height = Number(document.getElementById("height").value);
  const result = document.getElementById("result");
  const boxcount = (length * height) / 9;
  result.innerHTML = boxcount.toFixed(3) +" boxes";
}
