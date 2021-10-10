const form = document.querySelector('#form');
let progress = document.getElementById('progress');
let progressBar = progress.querySelector('.progress-bar');

form.addEventListener('submit' , function(e) {
    e.preventDefault();
    progress.classList.remove('d-none');
    let file = this.querySelector('#uploadFile').files[0];
    if (file) {
        let formData = new FormData();
        formData.append('file', file);
        
        let xHR = new XMLHttpRequest();
        xHR.addEventListener('load', complateHandler);
        xHR.upload.addEventListener('progress', progressHandler);
        xHR.open('POST', url, true);
        xHR.send(formData);

        // Project With Axios Package.............
        // axios.post(url , formData , {
        //     onUploadProgress: progressHandler
        // })
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err))
    }
})

function progressHandler(e) {
    let percent = Math.round((e.loaded / e.total) * 100);
    progressBar.style.width = `${percent}%`;
    progressBar.innerHTML = `${percent}%`;
}

function complateHandler() {
    console.log('complate');
}