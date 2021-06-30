
const playAudio = () => {
    const sound = document.getElementsByClassName("clip")[0];
    sound.currentTime = 0;
    sound.play();
}

 
export default playAudio;