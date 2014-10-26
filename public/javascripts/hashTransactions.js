/* 
____  _            _    ____  _ _     ____ ___  
 | __ )| | ___   ___| | _| __ )(_) |_  / ___/ _ \ 
 |  _ \| |/ _ \ / __| |/ /  _ \| | __|| |  | | | |
 | |_) | | (_) | (__|   <| |_) | | |_ | |__| |_| |
 |____/|_|\___/ \___|_|\_\____/|_|\__(_)____\___/ 

*/

$(document).ready(function() {
    $('#search').click(function() {
	var hash = $('input[name=WalletAddress]').val();
	$.ajax({
	    url: 'https://api.chain.com/v1/bitcoin/transactions/' + hash;
	    type: 'GET',
	    beforeSend: function(xhr) {
		xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
	    },
	    success: function(data) {
		/*
		var inputs = data[0];

		var value = inputs.value / 100000000.0;
		var address = inputs.addresses[0];


		$('#Value').append("Price: ");
		$('#value').append(value);
		$('#Address').append(address);
		*/
	    },
	    error: function(req, msg, err) {
		console.log(err);
	    },
	});
    });
});
