/* 
  ____  _            _     ____  _                      ___ ___  
 | __ )| | ___   ___| | __/ ___|| |__   __ _ _ __ ___  |_ _/ _ \ 
 |  _ \| |/ _ \ / __| |/ /\___ \| '_ \ / _` | '__/ _ \  | | | | |
 | |_) | | (_) | (__|   <  ___) | | | | (_| | | |  __/_ | | |_| |
 |____/|_|\___/ \___|_|\_\|____/|_| |_|\__,_|_|  \___(_)___\___/ 
                                                                 

*/

$(document).ready(function(){
        $(document).ajaxStart(function(){
                if ($('#loadingbar').length === 0) {
                        $('body').append("<div id='loadingbar'></div>");
                        $("#loadingbar").addClass("waiting").append($("<dt/><dd/>"));
                        $("#loadingbar").width((50 + Math.random() * 30) + "%");
                    }
                }).ajaxStop(function(){
                    //$('.result').text(new Date());
                    $("#loadingbar").width("101%").delay(200).fadeOut(400, function() {
                        $(this).remove();
                    });
                }).ajaxComplete(function() {
                    //$('#loadingbar').remove();
                }).ajaxError(function(){
                    $('#loadingbar').remove();
                    alert('error1');
                });
                $('#search').click(function() {
                    var addr = $('input[name=WalletAddress]').val(); // Assigning the variable "addr" to whatever address value is put in the input box.
                    var url = 'https://bitcoin.toshi.io/api/v0/addresses/' + addr + '/transactions';
                    $.getJSON(url, function(data) {
                        var address = data.hash.toUpperCase();
                        var BTCBalance = data.balance / 100000000.0;
                        BTCBalance = BTCBalance.toFixed(4);
                        var BTCSent = data.sent / 100000000.0;
                        var BTCReceived = data.received / 100000000.0;
                        BTCReceived = BTCReceived.toFixed(4);
                        var BTCuncomfirmed = data.unconfirmed_balance / 100000000.0;
                        var BTCHash = data.transactions[0].hash;
                        var BTCsize = data.transactions[0].size;
                        var BTCfees = data.transactions[0].fees / 100000000.0;
                        var BTCAmtSent = data.transactions[0].inputs[0].amount / 100000000.0;
                        var BTCSentAddr = data.transactions[0].inputs[0].addresses;
                        var BTCTransHash = data.transactions[0].inputs[0].previous_transaction_hash;

                        $('#Address').append('Address:');
                        $('#Sent').append('Sent:');
                        $('#Received').append('Received:');
                        $('#Balance').append('Balance');
                        $('#Uncomfirmed').append('Uncomfirmed:');
                        $('#Hash').append('Hash:')
                        $('#Size').append('Size:')
                        $('#Fees').append('Fees:');
                        $('#AmtSent').append('Amount Sent:');
                        $('#SentAddr').append('Address:');
                        $('#TransHash').append('Sent Hash: ');

                        $('#btcAddress').append(address);
                        $('#balance').append(BTCBalance + " BTC" + "<br />");
                        $('#sent').append(BTCSent + " BTC");
                        $('#received').append(BTCReceived + " BTC");
                        $('#hash').append(BTCHash);
                        $('#size').append(BTCsize);
                        $('#fees').append(BTCfees + " BTC");
                        $('#amtsent').append(BTCAmtSent + " BTC")
                        $('#sentaddr').append(BTCSentAddr);
                        $('#transhash').append(BTCTransHash);
                    });

        });
});
