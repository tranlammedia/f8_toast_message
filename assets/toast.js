function toast({
    type,
    heading, 
    message,
    duration = 4000}) {
        const main = document.getElementById('toast');
        if (main) {

            const toastBorder = document.createElement('div');
            // autoRemoveToast
            const autoRemoveToast = setTimeout(function(){
                main.removeChild(toastBorder)
            }, duration);

            const icons = {
                success: 'fas fa-check-circle',
                info: 'fas fa-info-circle',
                warning: 'fas fa-exclamation-circle',
                error: 'fas fa-exclamation-triangle',
            }
            const delay = (duration / 1000 - 1);

            toastBorder.classList.add('toast__border', `toast--${type}`);
            toastBorder.style.animation = `sideInLeft ease .5s, fadeOut ease 1s ${delay}s forwards`;
            toastBorder.innerHTML = `
            <div class="toast__icon"><i class="${icons[type]}"></i></div>
            <div class="toast__body">
                <div class="toast__heading">${heading}</div>
                <div class="toast__message">${message}</div>
            </div>
            <div class="toast__close"><i class="fas fa-times"></i></div>`;
            
            main.appendChild(toastBorder);
            // click remove Toast
            toastBorder.onclick = function(event) {
                console.log(event.target)
                if (event.target.closest('.toast__close')) {
                    main.removeChild(toastBorder);
                    clearTimeout(autoRemoveToast)
                }
            }
        }
}

function showSuccessToast() {
    toast({
        type: 'success',
        heading: 'success', 
        message: 'Dang ki thanh cong!'
    })
}

function showInfoToast() {
    toast({
        type: 'info',
        heading: 'info', 
        message: 'Truy van thanh cong!'
    })
}

function showWarningToast() {
    toast({
        type: 'warning',
        heading: 'warning', 
        message: 'Vui long kiem tra lai!'
    })
}

function showErrorToast() {
    toast({
        type: 'error',
        heading: 'error', 
        message: 'Da co loi xay ra!'
    })
}