/*
____  _            _    ____  _ _     ____ ___  
 | __ )| | ___   ___| | _| __ )(_) |_  / ___/ _ \ 
 |  _ \| |/ _ \ / __| |/ /  _ \| | __|| |  | | | |
 | |_) | | (_) | (__|   <| |_) | | |_ | |__| |_| |
 |____/|_|\___/ \___|_|\_\____/|_|\__(_)____\___/ 
 
*/

$(document).ready(function() {
	$('#search').click(function() {
		var addr = $('input[name=WalletAddress]').val();
		$.ajax({
			url: "https://api.chain.com/v1/bitcoin/addresses/" + addr + "/unspents",
			type: "GET",
			beforeSend: function(xhr) {
				xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
			},
			success: function(data) {
				var output = data[0];

				var addy = output.transactions_hash;

				$('#Addy').append("Sent to: ");
				$('#addy').append(addy);
			},
			error: function(req, msg, err) {
				console.log(err)
			}
		})
	});
});