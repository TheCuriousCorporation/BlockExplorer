var client = new ZeroClipboard(document.getElementById("copy-button"));

client.on("ready", function(readEvent) {
	// Alert... SWF is ready

	client.on("aftercopy", function(event) {
		event.target.style.display = "none";
		alert("Copied text to clipboard: " + event.data["text/plain"]);
	});
});