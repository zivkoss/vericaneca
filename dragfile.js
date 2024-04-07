const dropzone = document.getElementById('drop_zone');
const dropzoneMsg = document.querySelector('#drop_zone p');
const input = document.querySelector('input');

dropzone.addEventListener('click', () => {
    input.click();
    input.onchange = () => {
        upload(e.target.files[0]);
    }
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault(); 
});

dropzone.addEventListener('drop', async (e) => {
    e.preventDefault();
    // console.log("Drop");
    if (![...e.dataTransfer.items[0]].every(item => item.kind === "file")) { // .kind !== "file"
        dropzoneMsg.textContent = "Error: Not a file or files" ;
        throw new Error("Not a file or files");
    }

    // if (e.dataTransfer.items.length > 1) {
    //     dropzoneMsg.textContent = "Error: Cannot upload multiple files";
    //     throw new Error("Multiple items");
    // }

    const filesArray = [...e.dataTransfer.files];

    const areFiles = await Promise.all([...e.dataTransfer.files].map((file) => {
        return new Promise((resolve) => {
            const fr = new FileReader();
            fr.onprogress = (e) => {
                if (e.loaded > 50) {
                    fr.abort();
                    resolve(true);
                }
            }
                fr.onload = () => { resolve(true); }
                fr.onerror = () => { resolve(false); }
                fr.readAsArrayBuffer(file);     
        });
    }));

   

    if (!areFiles.every(item => item === true)) {
        dropzoneMsg.textContent = "Error: Not a file or files (cannot ne a folder)";
        throw new Error("Couldn't read file(s)");
    }

    upload(filesArray[0]);
});

function upload(file) {
    // console.log(file);
    const fd = new FormData();
    fd.append('file', file);

    dropzoneMsg.textContent = "Uploading...";

    const req = new XMLHttpRequest();
    req.open('POST', 'http://httpbin.org/post');

    req.upload.addEventListener('progres', (e) => {
        const progress = e.loaded / e.total;
        dropzoneMsg.textContent = (progress*100),toFixed()+"%";
        if (progress === 1) {
            dropzoneMsg.textContent = "Prpcessing...";
        }
    });

    req.addEventListener('load', () => {
        if (req.status === 200) {
            dropzoneMsg.textContent = "Success";
            console.log(JSON.parse(req.responseText));
        } else {
            dropzoneMsg.textContent = 'Upload failed';
            console.error("Bad response");
        }
    });

    req.addEventListener('error', () => {
        dropzoneMsg.textContent = 'Upload failed';
        console.error("Network error");
    });

    req.send(fd);

}

