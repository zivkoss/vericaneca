const dropzone = document.getElementById('drop_zone');
const dropzoneMsg = document.querySelector('#drop_zone p');

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault(); 
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    // console.log("Drop");
    if (e.dataTransfer.items[0].kind !== "file") {
        dropzoneMsg.textContent = "Error: Not a file";
        throw new Error("Not a file");
    }

    if (e.dataTransfer.items.length > 1) {
        dropzoneMsg.textContent = "Error: Cannot upload multiple files";
        throw new Error("Multiple items");
    }

    new Promise((resolve) => {
        const fr = new FileReader();
        fr.onprogress = (e) => {
            if (e.loaded > 50) {
                fr.abort();
                resolve(true);
            }
        }
            fr.onload = () => { resolve(true); }
            fr.onerror = () => { resolve(false); }
            fr.readAsArrayBuffer(e.dataTransfer.files[0]);
        
    });
});