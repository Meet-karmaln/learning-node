const EventEmitter = require("events");

const event = new EventEmitter();

event.on("response", () => {
	console.log("looking for malware");
});
event.on("response", () => {
	console.log("found some malware");
});
event.on("response", () => {
	console.log("getting the malware");
});
event.on("response", (name, id) => {
	console.log("got the malware: user name " + name + " with id of: " + id);
});

event.emit("response", "bug", 56945);
