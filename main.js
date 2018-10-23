
var card = document.querySelector(".cardContainer");
var button = document.querySelector(".new-card-button");
// Input fields
var pictureInput = document.querySelector("#picture");
var headlineInput = document.querySelector("#headline");
var placeInput = document.querySelector("#place");
var priceInput = document.querySelector("#price");
var timeInput = document.querySelector("#time");


// Þegar ýtt er á takka
button.onclick = function(){
	names.push(headlineInput.value);
	img.push(pictureInput.value);
	place.push(placeInput.value);
	price.push(priceInput.value);
	time.push(timeInput.value);
	card.innerHTML = "";
	
	show()
	clear_input()
}
// input fields tæmast eftir ýtt er á takkan
function clear_input() {
	pictureInput.value = "";
	headlineInput.value = "";
	placeInput.value = "";
	timeInput.value = "";
}
// Sýnir það sem er nú þegar í arrays þegar Reload
window.addEventListener("load", function () {
	show();
}, false);

// arrays
var names = ['Warm water and sunny winter weather!','Amazing waves and culture!', 'Cool coral reefs and best beaches!','Cozy atmosphere and cool vibe!'];
var img = ['https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd093986e77ede3c4c6fcaba42fdf544&auto=format&fit=crop&w=1650&q=80',
'https://images.unsplash.com/photo-1476937578872-e13654674462?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5893fc23e773505b5eb41c1d34be9844&auto=format&fit=crop&w=1659&q=80'
,'https://images.unsplash.com/photo-1508162252424-e8ad5ef02539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb43cdc295e30d764f86eb52952350d0&auto=format&fit=crop&w=1650&q=80'
,'https://images.unsplash.com/photo-1521811536712-c970687c97f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fde602a2af1ac266d7aa420b3f359e91&auto=format&fit=crop&w=2850&q=80',];
var price =['USD 1,200 ','USD 1,800','USD 1,900','USD 1,100'];
var time =['6 days','14 days','10 days','7 days'];
var place =['Taghazout, Morocco','Oahu, Hawaii','Bridgetown, Barbados','Foz do Arelho, Portugal'];
// display-a arrays 
var show = function(){
for(var i = 0; i < names.length; i++){

	card.innerHTML += `
	<div class="card">
		<div class="card-content"> 
		<img src="${img[i]}"/>
			<h3>${place[i]}</h3>
			<h2>${names[i]}</h2>
			<p>${price[i]}<br><span>${time[i]}</span></p>		
			
		</div>		
	</div>
	`
}
}

