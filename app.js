function randomPic(dogPic) {
  $.getJSON(dogPic, function(response) {
    parseDogPic(response);
  });

  $.getJSON(createUrl(), function(response) {
    parseNews(response);
  });
}

function createUrl() {
  var arr = ["pulse","wedding","hammer","injection","clue","think","pneumonia","preoccupation","menu","punish"]
  arr[Math.floor(Math.random()*10)]
  return `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${arr[Math.floor(Math.random()*10)]}&format=json`
}

const parseDogPic = json => {
  console.log(json.url);
  document.getElementById("puppyLove").src = json.url;
};

const parseNews = json =>{
  //console.log(json.items[0].title);
  document.getElementById("title").innerHTML = json.items[Math.floor(Math.random()*49)].title;
  
}

randomPic('https://random.dog/woof.json')