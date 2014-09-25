/*
 ____  _            _     ____  _                      ___ ___  
 | __ )| | ___   ___| | __/ ___|| |__   __ _ _ __ ___  |_ _/ _ \ 
 |  _ \| |/ _ \ / __| |/ /\___ \| '_ \ / _` | '__/ _ \  | | | | |
 | |_) | | (_) | (__|   <  ___) | | | | (_| | | |  __/_ | | |_| |
 |____/|_|\___/ \___|_|\_\|____/|_| |_|\__,_|_|  \___(_)___\___/ 
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