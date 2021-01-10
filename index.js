const nodeHtmlToImage = require('node-html-to-image');

module.exports = async (firstWord, secondWord='') => {

    if(!firstWord || firstWord.length === 0) throw new Error('Please specify at least one word.');

    if(secondWord === '') {
        var middle = Math.ceil(firstWord.length / 2);
        secondWord = firstWord.slice(middle);
        firstWord = firstWord.slice(0, middle);
        console.log(`firstWord : ${firstWord}\nsecondWord : ${secondWord}`);
        console.log('Middle : ' + middle)
    }

    return await nodeHtmlToImage({
        html: '<div class="hub"><span contenteditable="true">{{1}}</span><span contenteditable="true">{{2}}</span></div><style>html { height: 100%; } body { background: #000000; color: #ffffff; margin: 0; min-height: 100%; height: 100%; position: relative; } .hub { display: block; font-family: sans-serif; font-weight: bold; font-size: 9vw; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .hub span:nth-child(2) { background: #FF9900; color: #000000; border-radius: 1vw; padding: 0 1vw 1vw 1vw; display: inline-block; }</style>',
        content: { 1: firstWord, 2: secondWord}
    }).catch(console.error)

}