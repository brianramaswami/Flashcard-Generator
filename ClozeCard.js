
var ClozeCard = function(text, cloze){
    if(text.includes(cloze)){
        this.cloze = cloze;
        this.partial = text.replace(cloze, "...");
        this.fullText = text;
    }
    else{
        console.log("ERROR: " + "'" + cloze + "'" + " does not appear in " + "'" + text + "'");
    }
}


module.exports = ClozeCard;