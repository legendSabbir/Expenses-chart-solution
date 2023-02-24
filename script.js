(async () => {
  const res = await fetch("./data.json")
  const data = await res.json()
  
  renderBar(data)
})();

function renderBar(data) {
  const max = Math.max(...data.map(({amount}) => amount));
  const bars_container = document.querySelector(".bars-container")
  
  data.forEach(({amount, day}) => {
    const barHeight = (amount / max) * 100
    
    const bar_data = `
      <div class="bar-container">
        <div>
          <div class="bar ${max === amount ? "max" : ""}" style="height: ${barHeight}%" data-stat="$${amount}"></div>
        </div>
        
        <p class="label">${day}</p>
      </div>
    `;
    
    bars_container.innerHTML += bar_data
  })
}
