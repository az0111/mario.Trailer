const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharmodal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function altenarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click",()=>{
   altenarModal();
    video.setAttribute("src", linkDoVideo);
});
botaoFecharmodal.addEventListener("click", () =>{
 altenarModal();
 video.setAttribute("src", "");
});
