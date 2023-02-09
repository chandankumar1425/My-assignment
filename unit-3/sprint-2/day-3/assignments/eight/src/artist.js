function Artist(name, skill, profession){
    this.name=name,
    this.skill=skill,
    this.profession=profession
    artistsObject=Object.create(this)
}

var artistsObject = {}
Artist.prototype.getProfession=function(){
    return this.profession
}
Artist.prototype.print=function(){
    return `I am ${this.name}`
}
// Do not change this
export {Artist, artistsObject};