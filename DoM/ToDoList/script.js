document.querySelector("#one ul").addEventListener("click", function (e) {
  if (e.target.className == "delete") var p = e.target.parentElement;
  var pp = p.parentElement;
  pp.removeChild(p);
});

function AddEle() {
  var ff = document.forms;
  var f = ff["myform"];

  f.addEventListener("click", (g) => {
    g.preventDefault();
  });

  var q = document.querySelector('#myform input[type="text"]');

  var main = document.createElement("li");
  var tp = document.createElement("p");
  var tbtn = document.createElement("button");
  var ull = document.getElementById("unlist");

  ull.appendChild(main);
  main.appendChild(tp);
  main.appendChild(tbtn);

  tp.textContent = q.value;
  tbtn.innerHTML = "✔";
  tbtn.className = "delete";
}
