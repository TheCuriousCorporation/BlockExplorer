/* 
____  _            _    ____  _ _     ____ ___  
 | __ )| | ___   ___| | _| __ )(_) |_  / ___/ _ \ 
 |  _ \| |/ _ \ / __| |/ /  _ \| | __|| |  | | | |
 | |_) | | (_) | (__|   <| |_) | | |_ | |__| |_| |
 |____/|_|\___/ \___|_|\_\____/|_|\__(_)____\___/ 

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
                                            $('#uncomfirm').append(BTCuncomfirmed + " BTC");
                                    }

                                    $('#Address').append('Address:');
                                    $('#Sent').append('Sent:');
                                    $('#Received').append('Received:');
                                    $('#Balance').append('Balance');
                                    $('#Uncomfirmed').append('Uncomfirmed:');

                                    $('#btcAddress').append(BTChash);
                                    $('#balance').append(BTCBalance + " BTC" + "<br />");
                                    $('#sent').append(BTCSent + " BTC");
                                    $('#received').append(BTCReceived + " BTC");
                            },
                            error: function(req, msg, err) {
                                    console.log(err); // If it's broke, you had better fix it.
                            }
                });
        });
});