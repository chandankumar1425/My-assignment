function UserInfo(name, location) {
    this.name = name,
        this.location = location
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`
}
function serveIn(name, location, food) {
    let obj = new UserInfo(name, location)
    return serveFood.call(obj, food)
}
function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
function generateInVoice(name, location, quantity, price) {
    let obj = new UserInfo(name, location)
    let total = quantity * price
    return billNote.apply(obj, [total])
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };