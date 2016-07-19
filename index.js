module.exports = function(json, space, newline, print) {
    space = space || 2;
    var expected = JSON.stringify(JSON.parse(json), null, space);
    if (newline) expected += '\n';
    if (print && expected !== json) {
      var jLines = json.split('\n');
      var eLines = expected.split('\n');
      for (var i=0; i<jLines.length && i<eLines.length; i++) {
        if (jLines[i] !== eLines[i]) {
          console.log('expected', i+':', eLines[i]);
          console.log('provided', i+':', jLines[i]);
          return false;
        }
      }
      console.log('missing new line');
      return false;
    }
    else {
      return expected === json;
    }
}
