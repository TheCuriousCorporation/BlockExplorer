/* 
  ____  _            _     ____  _                      ___ ___  
 | __ )| | ___   ___| | __/ ___|| |__   __ _ _ __ ___  |_ _/ _ \ 
 |  _ \| |/ _ \ / __| |/ /\___ \| '_ \ / _` | '__/ _ \  | | | | |
 | |_) | | (_) | (__|   <  ___) | | | | (_| | | |  __/_ | | |_| |
 |____/|_|\___/ \___|_|\_\|____/|_| |_|\__,_|_|  \___(_)___\___/ 
                                                                 
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
