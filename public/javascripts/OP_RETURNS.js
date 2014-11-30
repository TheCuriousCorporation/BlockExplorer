$(document).ready(function(){ // Enable jQuery.
    $('#search').click(function(){ // Enable the "click" function. Once the Button is clicked, the API is called.
        var addr = $('input[name=WalletAddress]').val(); // Assigning the variable "addr" to whatever address value is put in the input box.
        $.ajax({
          url: "https://api.chain.com/v1/bitcoin/addresses/" + addr + '/op-returns',
          data: {limit: 10},
          type: "GET",
          beforeSend: function(xhr) {
            xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
          },
          success: function(data) {

            var input = data[0];

            var text = input.text;

            $('#Text').append("Text: ");
            $('#text').append(text);
          },
          error: function(req, msg, err) {
            console.log(err);
          }
        });
      });
  });