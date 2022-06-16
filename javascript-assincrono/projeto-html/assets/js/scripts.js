const DOG_URL = "https://api.thedogapi.com/v1/images/search";

dogBtn = document.querySelector("#change-dog");
dogImg = document.querySelector("#imagem");

dogBtn.addEventListener("click", fetchPic);

function fetchPic() {
	fetch(DOG_URL)
		.then(res => res.json())
		.then((data) => {
			let dogImgUrl = data[0].url;
			dogImg.src = dogImgUrl
		});
}
fetchPic()