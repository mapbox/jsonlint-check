module.exports = function(json, space, newline) {
    space = space || 2;
    var expected = JSON.stringify(JSON.parse(json), null, space);
    if (newline) expected += '\n';
    return expected === json;
}
