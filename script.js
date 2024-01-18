console.log("Welcome to spotify")
let myprogressBar = document.getElementById('myprogressbar')
const mastersongname = document.getElementById('mastersongname')
let songs=[
    {songname:"Heeriye",filepath:"_Heeriye Heeriye Aa_320(PagalWorld.com.pe).mp3" },
    {songname:"Kesariya",filepath:"Kesariya_320(PagalWorld.com.pe).mp3"},
    {songname: "Chaleya", filepath:"Chaleya_320(PagalWorld.com.pe).mp3"},
    {songname: "Khalasi", filepath:"Khalasi_320(PagalWorld.com.pe).mp3"},
    {songname:"Maan Meri Jaan",filepath:"Maan Meri Jaan_320(PagalWorld.com.pe).mp3"},
    {songname:"Tere Hawale",filepath:"Tere Hawaale_320(PagalWorld.com.pe).mp3"},
]
let audio=new Audio("_Heeriye Heeriye Aa_320(PagalWorld.com.pe).mp3");
masterplay = document.getElementById("masterplay");
gif= document.getElementById('gif')
masterplay.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime==0){
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
         gif.style.opacity=0;
    }
})
audio.addEventListener('timeupdate',()=>{
    progress = parseInt((audio.currentTime/audio.duration)*100);
    myprogressBar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audio.currentTime=myprogressbar.value*audio.duration/100;
})

const makeAllplays=()=>{ 
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element,i)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{element.addEventListener('click', (e)=>{
    // console.log(e.target.id);
    makeAllplays();
    songindex=parseInt(e.target.id);
    console.log(e.target.id)
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audio.src=songs[songindex]['filepath'];
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    changesongname(songindex)
   })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0}
    else{
        songindex+=1;
        changesongname(songindex);
    }
    audio.src=songs[songindex]['filepath'];
    audio.currentTime=0;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {songindex=0}

    else{songindex-=1}
    changesongname(songindex)
    audio.src=songs[songindex]['filepath'];
    audio.currentTime=0;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
 
})
const changesongname = (index)=>{
    mastersongname.innerHTML= songs[index]['songname'];
}
