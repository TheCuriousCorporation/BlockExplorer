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
				var value = data.value / 100000000.0;

				if (value > 0) {
					$('#ValueUnspent').append('Amount Unspent: ');
					$('#valueunspent').append(value);
				} else {
					return null;
				}
				// Will this code work as a cleaner re-write?
				//if (value > 0 ? $('#ValueUnspent').append('Amount Unspent: '); $('#valueunspent').append(value); : return null);
			},
			error: function(req, msg, err) {
				console.log(err)
			}
		})
	});
});