$(function() {
  $(".dial").knob({
    'change': function() {
      var color_rgb='rgb(' + $('#r').val() + ',' + $('#g').val() + ',' + $('#b').val() + ')';
      $('#color').css('background-color',color_rgb);
      var color_hex = '#' + d_a_h($('#r').val()) + d_a_h($('#g').val()) + d_a_h($('#b').val());
      $('#color').text(color_hex);
    }
  });
});

function d_a_h(dec) {
  var caracteres = "0123456789ABCDEF";
  var low = dec % 16;
  var high = (dec - low) / 16;
  hex = "" + caracteres.charAt(high) + caracteres.charAt(low);
  return hex;
}
