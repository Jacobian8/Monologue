import React, {useState,useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './App.css';

function App() {

  const song1 = "https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/7782908";
  const song2 = "https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/62435015";
  const song3 = "https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/62435011";
  const img1 = "https://image.shutterstock.com/z/stock-vector-innovations-systems-connecting-people-and-robots-devices-future-technologies-in-automatics-cyborg-1061543018.jpg";
  const img2 = "https://image.shutterstock.com/z/stock-vector-touch-the-future-interface-technology-the-future-of-user-experience-503854255.jpg";
  const img3 = "https://image.shutterstock.com/z/stock-photo-woman-with-glasses-of-virtual-reality-future-technology-concept-528831091.jpg";
  const songs = [song1,song2,song3]
  const galleryItems = [img1, img2, img3]

  const [musiccode, setmusiccode] = useState(0);
  const [music, setmusic] = useState("");
  const [musicName, setmusicName] = useState("")

  const fetchSongs=async(url)=>{
    await fetch(`https://cors-anywhere.herokuapp.com/${url}`,{
       method:"GET",
       headers:{
         "Authorization":"u5bm4v4ivl1o7v6n5v2mrw08kn6y9fdp"
       }
     }).then(res=>{
       res.json().then((data)=>{
         setmusicName(data.title)
         setmusic(data.playUrl)
       })
     })
   };

 const handlePrev=(e) =>{
  e.preventDefault();
    if(musiccode === 0){
      setmusiccode(2)
    }else{
      let newcode = musiccode-1;
      setmusiccode(newcode)
    }
    fetchSongs(songs[musiccode]);
  }

  const handleNext = e =>{
    e.preventDefault();
    if(musiccode === 2){
      setmusiccode(0)
    }else{
      let newcode = musiccode+1;
      setmusiccode(newcode)
    }
    fetchSongs(songs[musiccode]);
  }

  useEffect(()=>(fetchSongs(songs[musiccode])),[]);

  return (
    <div>
      <AliceCarousel
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        autoHeight={true}
      >
        <img src={galleryItems[0]} />
        <img src={galleryItems[1]} />
        <img src={galleryItems[2]} />
      </AliceCarousel>
      <AudioPlayer
        autoPlay
        src={music}
        onPlay={e => console.log("onPlay")}
        onClickPrevious={handlePrev}
        showSkipControls = {true}
        onEnded = {handleNext}
        onClickPrevious = {handlePrev}
        onClickNext = {handleNext}
      />
    </div>
  )
}

export default App;