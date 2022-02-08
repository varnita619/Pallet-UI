const live_btn = document.querySelector('.live-btn');
const toast = document.querySelector('.hidden-toast');

live_btn.addEventListener('click',()=>{
    toast.classList.add('active-toast')

    setTimeout(() => {
        toast.classList.remove("active-toast")
    }, 3000)
})
