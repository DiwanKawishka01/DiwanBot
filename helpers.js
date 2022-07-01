function successfullMessage(msg) {
    return "✅ *DIWAN*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *DIWAN*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *DIWAN*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
