const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');

const openModel = () => {
   console.log("model is open");
   model.classList.add("active");
   overlay.classList.add("overlayactive");
};

const closeModel = () => {
    console.log("model is closed");
    model.classList.remove("active");
    overlay.classList.remove("overlayactive");
};