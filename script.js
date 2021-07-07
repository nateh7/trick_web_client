function stepHandler() {
    console.log("Step button pressed!");
}

function startHandler() {
    console.log("Start button pressed!");
}

function freezeHandler() {
    console.log("Freeze button pressed!");
}

function shutdownHandler() {
    console.log("Shutdown button pressed!");
}

function liteHandler() {
    console.log("Lite button pressed!");
}

function dataRecordOnHandler() {
    console.log("Data Record On button pressed!");
}

function realTimeOnHandler() {
    console.log("Real Time On button pressed!");
}

function dumpCheckpointHandler() {
    console.log("Dump Checkpoint button pressed!");
}

function loadCheckpointHandler() {
    console.log("Load Checkpoint button pressed!");
}

function exitHandler() {
    console.log("Exit button pressed!");
}


document.getElementById("step").addEventListener("click", stepHandler);
document.getElementById("start").addEventListener("click", startHandler);
document.getElementById("freeze").addEventListener("click", freezeHandler);
document.getElementById("shutdown").addEventListener("click", shutdownHandler);
document.getElementById("lite").addEventListener("click", liteHandler);
document.getElementById("data-record-on").addEventListener("click", dataRecordOnHandler);
document.getElementById("realtime-on").addEventListener("click", realTimeOnHandler);
document.getElementById("dump-checkpoint").addEventListener("click", dumpCheckpointHandler);
document.getElementById("load-checkpoint").addEventListener("click", loadCheckpointHandler);
document.getElementById("exit").addEventListener("click", exitHandler);