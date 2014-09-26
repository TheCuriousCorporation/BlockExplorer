/*
____  _            _    ____  _ _     ____ ___  
 | __ )| | ___   ___| | _| __ )(_) |_  / ___/ _ \ 
 |  _ \| |/ _ \ / __| |/ /  _ \| | __|| |  | | | |
 | |_) | | (_) | (__|   <| |_) | | |_ | |__| |_| |
 |____/|_|\___/ \___|_|\_\____/|_|\__(_)____\___/ 
 
*/
$(document).ready(function(){ // Enable jQuery.
    $('#search').click(function(){ // Enable the "click" function. Once the Button is clicked, the API is called.
        var addr = $('input[name=WalletAddress]').val(); // Assigning the variable "addr" to whatever address value is put in the input box.
        $.ajax({
          url: "https://api.chain.com/v1/bitcoin/addresses/" + addr + '/transactions',
          data: {limit: 10},
          type: "GET",
          beforeSend: function(xhr) {
            xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
          },
          success: function(data) {
            var output = data[0];

            var block_hash_zero = output.block_hash;
            var block_height_zero = output.block_height;
            var confirm_zero = output.confirmations;

            var inputs = output.inputs[0];
            var input_value = inputs.value / 100000000.0;

            var outputs = output.outputs[0];
            var output_value = outputs.value / 100000000.0;

            var fees = output.fees / 100000000.0;
            var amount = output.amount / 100000000.0;


            $('#BlockZero').append('Block Hash:');
            $('#HeightZero').append('Block Height: ');
            $('#ConfirmZero').append('Confirmations:' );

            $('#blockZero').append(block_hash_zero);
            $('#heightZero').append(block_height_zero);
            $('#confirmZero').append(confirm_zero);

            $('#InputsValueZero').append('Input Value: ')
            $('#inputsValueZero').append(input_value);

            $('#OutputsValueZero').append('Output Value: ');
            $('#outputsValueZero').append(output_value);

            $('#FeesZero').append('Fees: ');
            $('#feesZero').append(fees);
            $('#AmountZero').append('Amount Sent: ');
            $('#amountZero').append(amount);


          },
          error: function(req, msg, err) {
            console.log(err);
          }
        })
    });
});