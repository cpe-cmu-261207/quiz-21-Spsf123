callApi();

const gen = document.getElementById("span-gender-icon");
const img = document.getElementById("img-profile");
const nametag = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");

btnRandom.onclick = () => {
  callApi();
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    gen.innerText = "👩";
  } else {
    gen.innerText = "👨";
  }
  img.src = resp.data.results[0].picture.large;
  nametag.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  email.innerText = resp.data.results[0].email;
  address.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  console.log(resp.data.results[0]);
}
