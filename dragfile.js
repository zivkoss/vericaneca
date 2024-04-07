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
    if (e.dataTransfer.items[0].kind !== "file") {
        dropzoneMsg.textContent = "Error: Not a file";
        throw new Error("Not a file");
    }

    if (e.dataTransfer.items.length > 1) {
        dropzoneMsg.textContent = "Error: Cannot upload multiple files";
        throw new Error("Multiple items");
    }

    const filesArray = [...e.dataTransfer.files];

    const isFile = await new Promise((resolve) => {
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

    if (!isFile) {
        dropzoneMsg.textContent = "Error: Not a file (cannot ne a folder)";
        throw new Error("Couldn't read file");
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
    })

}

// const isFile = await new Promise((resolve) => {
//     const fr = new FileReader();
//     fr.onprogress = (e) => {
//         if (e.loaded > 50) {
//             fr.abort();
//             resolve(true);
//         }
//     }
//         fr.onload = () => { resolve(true); }
//         fr.onerror = () => { resolve(false); }
//         fr.readAsArrayBuffer(e.dataTransfer.files[0]);     
// });