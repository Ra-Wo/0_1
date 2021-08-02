const body = document.querySelector("body");

const generate = () =>{
  let div = document.createElement("div");
  div.textContent = Math.random().toFixed(0);
  div.classList.add("div");
  div.style.right = `${(Math.random().toFixed(1) * window.innerWidth)}px`;
  body.appendChild(div)
  setTimeout(()=>{
    div.parentNode.removeChild(div)
  }, 5000)
}

setInterval(generate, 100)