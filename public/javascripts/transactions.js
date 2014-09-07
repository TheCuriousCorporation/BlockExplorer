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

                var output = data[0];

                var bitcoinHash = output.hash;
                var confirmations = output.confirmations;
                var amount = output.amount / 100000000.00;
                var fees = output.fees / 100000000.00;

                $('#TransactionsHash').append('Transaction Hash:');
                $('#Confirmation').append('Confirmations');
                $('#Value').append('Value:');
                $('#Fees').append('Fees:');
                $('#BlockTime').append('Date:');
                    
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