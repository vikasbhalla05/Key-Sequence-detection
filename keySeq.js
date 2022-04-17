let pressed = [];
let secret = "vikas";

window.addEventListener('keyup', (e) => {
	keyPress = e.key;
	pressed.push(keyPress);

	pressed.splice(-secret.length-1, pressed.length - secret.length);
	console.log(pressed);

	if(pressed.join('').includes(secret)){
		cornify_add();
	}
})