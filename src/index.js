var uniqueRandomArray = require('unique-random-array');
var asoiafChapters = require('./asoiaf-chapters.json');
var jsonQuery = require('json-query');

function adwd(pov, numeral) {
    return jsonQuery(['ADWD[pov=? & numeral=?].summary', pov, numeral], {
        data: asoiafChapters
    }).value;
}

module.exports = {
    all: asoiafChapters,
    adwd: adwd
};

