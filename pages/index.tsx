import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Song from '@/components/Song/Song';
import Audio from '@/components/Audio/Audio';


const SONGS: Song[] = [
  {
    id: 0,
    title: 'Birdseye Blues',
    artist: 'Chris Haugen',
    file: '/Alice.mp3',
    // file: '../public/songs/Alice.mp3',
    image: '/premiere.jpg'
  },
  {
    id: 1,
    title: 'Depth Fuse',
    artist: 'French Fuse',
    file: './Caramelo.mp3',
    // file: '../public/songs/Caramelo.mp3',
    image: '/deuxieme.jpg'
  },
  {
    id: 2,
    title: 'Duh Fuse',
    artist: 'French Fuse',

    file: '/Shine2.mp3',
    // file: '../public/songs/Shine2.mp3',
    image: '/troisieme.jpg'
  }
]



export const getStaticProps = async () => {
  const allSongs: Song[] = SONGS;
  return {
    props: {
      songs: allSongs
    },
    revalidate: 3600
  }
}

const Home: NextPage<{ songs: Song[] }> = ({ songs }) => {

  const [trackPlaying, setTrackPlaying] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);




  return (
    <div className={styles.container}>
      <div className={styles.songPlaying}>
        <Song song={songs[trackPlaying]} isPlaying={isPlaying} />
        {/* <Song isPlaying={isPlaying} trackPlaying={trackPlaying} song={songs[trackPlaying]} /> */}
      </div>
      <Audio isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} trackPlaying={trackPlaying}
        setTrackPlaying={setTrackPlaying} />
    </div>
  )
}

export default Home


// export default function Home() {
//   return (
//     <div className={styles.container}></div>
//   )
// }
