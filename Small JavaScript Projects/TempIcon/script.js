const tempFun = () => {
  const temp = document.querySelector("#temp");

  temp.innerHTML = "&#xf2ca;";
  temp.style.color = "#ECFF33";

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9;";
    temp.style.color = "#FFDD33";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c8;";
    temp.style.color = "#FFAC33";
  }, 2000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7;";
    temp.style.color = "#FF9033";
  }, 3000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7;";
    temp.style.color = "red";
  }, 4000);
};

tempFun();

setInterval(() => {
  tempFun();
}, 5000);
