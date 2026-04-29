ion checkSpeed() {
    const imageAddr = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"; // ~1MB image
    const downloadSize = 1048576; // in bytes (1MB)
    const output = document.getElementById("output");

    let startTime, endTime;

    const download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }

    download.onerror = function () {
        output.innerText = "Error: Unable to test speed.";
    }

    startTime = (new Date()).getTime();
    const cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        const duration = (endTime - startTime) / 1000; // seconds
        const bitsLoaded = downloadSize * 8;
        const speedBps = bitsLoaded / duration;
        const speedKbps = speedBps / 1024;
        const speedMbps = speedKbps / 1024;

        output.innerText = `Your connection speed is:\n${speedMbps.toFixed(2)} Mbps`;
    }
}
