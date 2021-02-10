const fs = require('fs');
const hub = require('./index.js');

hub('GitHub').then(img => {

    fs.writeFile(`./hub.png`, img, () => {
        console.log('finished generating!')
    });

})
