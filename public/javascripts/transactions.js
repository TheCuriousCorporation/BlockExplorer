$(document).ready(function() {
    $('#search').click(function() {
        var addr = $('input[name=WalletAddress]').val();
        $.ajax({
            url: 'https://api.chain.com/v1/bitcoin/addresses/' + addr + '/transactions',
            data: {limit: 50},
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
            },
            success: function(data) {

                $('#TransactionsHash').append('<h3>Transaction Hash</h3>');
                $('#Confirmation').append('<h3>Confirmation</h3>');
                $('#Value').append('<h3>Value</h3>');
                $('#Fees').append('<h3>Fees</h3>');
                $('#BlockTime').append('<h3>Date</h3>');

                for (var i = 0; i <= data.length; i++) {
                    var output = data[i];
                    var time = output.block_time + '<br />';
                    var bitcoinHash = output.hash + '<br />';
                    var confirmations = output.confirmations + '<br />';
                    var amount = output.amount / 100000000.00 + '<br />';
                    var fees = output.fees / 100000000.00 + '<br />';
                    
                    $('#time').append(time);
                    $('#hash').append(bitcoinHash);
                    $('#confirm').append(confirmations);
                    $('#amount').append("<img src='/images/BitSmall.png' /> " + amount);
                    $('#fees').append("<img src='/images/BitSmall.png' /> " + fees);
                }

            },
            error: function(req, msg, err) {
                console.log(err);
            }
        });
    });
});