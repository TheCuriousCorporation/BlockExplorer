$(document).ready(function(){ // Enable jQuery.
	$('#search').click(function(){ // Enable the "click" function. Once the Button is clicked, the API is called.
		var addr = $('input[name=WalletAddress]').val(); // Assigning the variable "addr" to whatever address value is put in the input box.
		$.ajax({
			url: 'https://api.chain.com/v1/bitcoin/addresses/' + addr, // Chain API URL.
			type: 'GET',
			beforeSend: function(xhr) {
				xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523')); // Authorizing the API call.
			},
			success: function(data) { // If the API call is successfull, it assigns the JSON to this function.
                                var BTChash = data.hash.toUpperCase();
                                var BTCBalance = data.balance / 100000000.0;
        		        var BTCSent = data.sent / 100000000.0;
        		        var BTCReceived = data.received / 100000000.0;
        		        var BTCuncomfirmed = data.unconfirmed_balance / 100000000.0;

                                if (BTCuncomfirmed <= 0) {
                                        $('#uncomfirm').append("No Uncomfirmed Coins");
                                } else {
        			        $('#uncomfirm').append(BTCuncomfirmed);
        		        }

        		        $('#Address').append('Address:');
        		        $('#Sent').append('Sent:');
        		        $('#Received').append('Received:');
        		        $('#Balance').append('Balance:');
        		        $('#Uncomfirmed').append('Uncomfirmed:');

        		        $('#btcAddress').append(BTChash);
        		        $('#balance').append(BTCBalance + " BTC");
        		        $('#sent').append(BTCSent + " BTC");
        		        $('#received').append(BTCReceived + " BTC");

			},
			error: function(req, msg, err) {
				console.log(err); // If it's broke, you had better fix it.
			}
		});
	});
});