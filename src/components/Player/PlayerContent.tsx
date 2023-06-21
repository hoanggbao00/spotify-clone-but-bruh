import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { Song } from "../../ultis/Type";
import MediaItem from "../MediaItem";
import LikeButton from "../LikeButton";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import Slider from "../Slider";
import { useDispatch, useSelector } from "react-redux";
import { playerState, toggleMute, togglePlay, setVolume as setVolumeStore } from "../../redux/playerSlice";
import { useState } from "react";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = useSelector(playerState)
  const dispatch = useDispatch()

  const [isPlaying, setIsPlaying] = useState(player.isPlaying)
  const [isVolumeMuted, setMuted] = useState(player.isVolumeMuted)
  const [volume, setVolume] = useState([player.volume])

  const handlePlay = () => {
    dispatch(togglePlay())    
    setIsPlaying(player.isPlaying)
  }

  const handleMute = () => {
    dispatch(toggleMute());
    setMuted(player.isVolumeMuted)
  }

  const handleVolume = (e:number) => {
    dispatch(setVolumeStore({volume: e}))
    setVolume(player.volume)
  }

  return (
    <div className="grid grid-cols h-full w-full ">
      <div
        className="
          flex
          justify-between
          gap-x-20
        "
      >
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} onClick={() => {}} />
          <LikeButton songId="like" />
        </div>
        <div
          className="
              flex flex-col
              h-full
              w-full
              justify-center
              items-center
              max-w-[722px]
              min-w-[430px]
              gap-x-6
              gap-y-3
            "
        >
          <div className="
            flex gap-x-4 items-center
          ">
            <AiFillStepBackward
              onClick={() => {}}
              size={30}
              className="
                text-neutral-400
                cursor-pointer
                hover:text-white
                transition
              "
            />
            <div
              className="
                h-10
                w-10
                flex
                items-center
                justify-center
                rounded-full
                bg-white
                p-1
                cursor-pointer
              "
              onClick={() => handlePlay()}
            >
              {isPlaying ? <BsPauseFill size={30} className="text-black" /> : <BsPlayFill size={30} className="text-black" />}
            </div>
            <AiFillStepForward
              onClick={() => {}}
              size={30}
              className="
              text-neutral-400
              cursor-pointer
              hover:text-white
              transition
            "
            />
          </div>
          <div className='
            w-full
            flex
            gap-x-3
            items-center
          '>
            <span className='text-neutral-400 font-medium text-sm h-full'>0:00</span>
            <Slider BgTrack="bg-neutral-400/40" height={2} thumbSize={4} label="music"/>
            <span className="text-neutral-400 font-medium text-sm h-full">03:02</span>
          </div>
        </div>
        <div className="flex justify-end pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <div onClick={handleMute}>

            {isVolumeMuted ?  <HiSpeakerXMark size={32} className="cursor-pointer" /> : <HiSpeakerWave size={32} className="cursor-pointer" />}
            </div>
            <Slider BgTrack="bg-neutral-400/50" label="volume" value={isVolumeMuted ? [0] : [volume]} onChange={(e) => handleVolume(e)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
