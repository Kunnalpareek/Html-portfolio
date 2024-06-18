var videoSection =  document.querySelector(".intro-video");

videoSection.addEventListener("click",()=>{
    alert("Radhe Radhe");
    createOverlay();
})

function createOverlay() {
    var videoFrame = document.createElement("div");
    videoFrame.setAttribute("id","overlyplayer")
    videoFrame.innerHTML = `<iframe width="5rem" height="5rem" src="https://www.youtube.com/embed/QSNa8U1yGrM?si=C_Paue9xTEVGsHVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

    videoSection.appendChild(videoFrame);
}