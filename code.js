

const data = 
[{
  
    "id":"8",
    "hex_color":"FFCD1C",
    "name":"ОСНОВА",
    "stations":[
    {
        "name": "9816 - Нач. отд. админ. ЦОИ"
    },
    {
        "name": "9528 - Инженер-электроник ЦОИ"
    },
    {
        "name": "9688 - Инженер-электроник ЦОИ"
    },
    {
        "name": "9717 - Комната печати ЦОИ"
    },
    {
        "name": "9248 - Техник отд. ПО ЦОИ"
    },
    {
        "name": "9032 - Техник отд. ТСО ЦОИ"
    },
    {
        "name": "9037 - Техник отд. УИС ЦОИ"
    },
    {
        "name": "9360 - Факс нач. ЦОИ"
    },
    {
        "name": "9028 - ЦОД ОС ЦОИ"
    },
    {
        "name": "9062 - ЦСО ЦОИ"
    },
    {
        "name": "9628 - Электронная почта ЦОИ"
    },
]
  
}];

const stations = [];

data.forEach(line => {stations.push(...line.stations);});
console.log(stations);

const searchInput = document.querySelector('.search');
const searchOptions = document.querySelector('.options');

function getOptions(word, stations) {
  return stations.filter(s => {
    // Определить совпадает ли то что мы вбили в input
    // названиям станций внутри массива

    const regex = new RegExp(word, 'gi');
    return s.name.match(regex);
  })
}

function displayOptions() {

  console.log('this.value >> ', this.value);

  const options = getOptions(this.value, stations);

  const html = options
    .map(station => {
      const regex = new RegExp(this.value, 'gi');
      const stationName = station.name.replace(regex, 
          `<span class="hl">${this.value}</span>`
        )

      return `<li><span>${stationName}</span></li>`;
    })
    .slice(0, 10)
    .join('');

  searchOptions.innerHTML = this.value ? html : null;
}



searchInput.addEventListener('change', displayOptions);
searchInput.addEventListener('keyup', displayOptions);
