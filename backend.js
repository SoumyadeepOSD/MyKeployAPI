const API = "http://localhost:3000/list_movies";

async function GetData(API) {
  const res = await fetch(API);
  const data = await res.json();
  for (var i = 0; i < data.length; i++) {
    const { id, title, image } = data[i];
    console.log(`Id is ${id} and title is ${title} and image is ${image}`);
    const tab = `
    <div style="color:blue;">
    <p style="font-size: 2rem; color:black;">Movies Name</p>
        <h1>${data[0].title}</h1>
        <h1>${data[1].title}</h1>
        <h1>${data[2].title}</h1>
        <h1>${data[3].title}</h1>
        <h1>${data[4].title}</h1>
    </div>
    `;
    document.getElementById("main").innerHTML = tab;
  }
}

GetData(API);
