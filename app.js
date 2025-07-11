let mat = document.getElementById("mat");

playList = [
    "./video_1.mp4",
    "./video_2.mp4",
    "./video_3.mp4",
    "./video_4.mp4",
    "./video_5.mp4",
    "./video_6.mp4",
    "./video_7.mp4"
]

let track;


let shuffle = () => {
    let newTrack = Math.floor(Math.random() * 10 )% playList.length;
    while (newTrack == track){
        track = Math.floor(Math.random() * 10 )% playList.length;    
    }
    
    track = newTrack;
    return playList[track];
}


let autoPlay = ()=> {
    mat.src = shuffle();
    // mat.load();
    console.log(`${mat.src}`);
}

mat.src= shuffle();

mat.addEventListener('ended', autoPlay);