const userName = document.getElementById("username");
const passWord = document.getElementById("password");

const logoutButton = document.getElementById("logout-button");
const loginButton = document.getElementById("show-login");
const signButton = document.getElementById("sign-button");

const imgFrame = document.querySelectorAll(".img-frame");
const h1 = document.querySelector("h1");
const citat = document.getElementById("citat");
const errorMsg = document.getElementById("error-msg");
const formContainer = document.querySelector(".form-container")
const cover = document.getElementById("cover")


// If statement som kollar LS vid reload
	if (localStorage.getItem("username")) {
		loginFunc()
	}



// Databas av användare
const users = [
	{
		username: "erik",
		password: "erik",
	},
	{
		username: "janne",
		password: "test",
	},
    {
		username: "test123",
		password: "test123",
	},
    {
		username: "Jakob",
		password: "password",
	},
    {
		username: "life",
		password: "islife",
	},
];




//Eventlistener på Login knapp
document.querySelector("#show-login").addEventListener("click", () => {
	document.querySelector(".form-container").classList.add("active");
    cover.classList.add("cover");
});
//Eventlistener close knapp på form
document.querySelector(".form-container .close-btn").addEventListener("click", () => {
		document.querySelector(".form-container").classList.remove("active");
        cover.classList.remove("cover");
        errorMsg.classList.add("remove"); 
	});


// sign in listener som kollar user array
signButton.addEventListener("click", (e) => {
	const user = users.find((user) => 
    user.username === userName.value && user.password === passWord.value);

		if (user) {
            loginFunc();
	    localStorage.setItem("username", user.username);
	    localStorage.setItem("password", user.password);
        } else {
            errorMsg.classList.remove("remove"); 
			errorMsg.innerHTML = "Användare finns inte. Vänligen försök igen!";
		}
	e.preventDefault();
});

//Login function
function loginFunc() {
	for (let i = 0; i < imgFrame.length; i++) {
		imgFrame[i].classList.add("remove");
	}
	loginButton.classList.add("remove");
	logoutButton.classList.remove("remove");
	h1.innerHTML = "Välkommen" + " " + userName.value;
	citat.innerHTML = randomCitat();
    formContainer.classList.add("remove");
    cover.classList.remove("cover");
}

//Logout Eventlistener
logoutButton.addEventListener("click", () => {
    window.location.reload();
	localStorage.removeItem("username");
	localStorage.removeItem("password");

});


// random citat func
function randomCitat() {
	const randomCitat = [
		'"En cerveza por favor"',
		'"Sol vind och vatten"',
		'"Att det aldrig kan regna"',
		'"Ibland undrar man hur dem har det i sverige"',
	];

	return randomCitat[Math.floor(Math.random() * randomCitat.length)];
}

