import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import PlaylistContent from "../../components/Playlistpage/PlaylistContent";
import { BsSpotify } from "react-icons/bs";
import { useEffect, useState } from "react";
import SpotifyAPI from "../../api/spotify";
import { capitalizeFirstLetter } from "../../ultis";

const Playlist = () => {
  const params = useParams()
  const [data, setData] = useState<Track | null | any>(null)

  useEffect(()=> {
    if(!params.key) return
    
    if(data) return

    SpotifyAPI.getTrackById(params.key).then(res => {
      setData(res)
    })
  },[])

  return (
    <div
      className="
      bg-neutral-900
      rounded-lg
        w-full
        h-full
        overflow-hidden
        overflow-y-auto
        flex flex-col
      "
    >
      <Header>
        <div
          className="
          bg-gradient-to-b
          from-green-500/10
          to-neutral-500/50
          h-80
          flex flex-nowrap
          items-center
          gap-x-3
          p-5
          overflow-hidden
        "
        >
          <div
            className="
              min-h-[16rem]
              min-w-[16rem]
              h-52 md:h-64
              w-52 md:w-64
              p-6 md:p-4
              flex
              justify-center
              items-center
            "
          >
            <img
              className="
              bg-white
              w-full
              h-full
              object-cover
              drop-shadow-xl
            "
              src={(data ? data.images.coverart : "./images/liked.png")}
              alt=""
            />
          </div>
          <div
            className="
            h-full
            w-full
            py-7
            flex
            flex-col
            justify-between
          "
          >
            <p
              className="
                font-bold
              "
            >
              {data ? capitalizeFirstLetter(data.type) : 'Playlist'}
            </p>
            <h1
              className="
                font-bold
                lg:text-7xl
                text-7xl
                py-4
              "
            >
              {data ? data.title : 'Peaceful Piano'}
            </h1>
            <p className="truncate text-neutral-400">
              {data ? data.sections[1].footer : 'Peaceful piano to help you slow down, breathe, and relax.'}
            </p>
            <div className="flex">
              <div
                className="
                w-[32px]
                h-[32px]
                mr-2
                overflow-hidden
              bg-black
                rounded-[50%]
              "
              >
                <BsSpotify
                  className="
              text-green-500
              w-full
              h-full
                "
                />
              </div>
              <div>
                <Link
                  className="
                  font-bold
                  hover:underline
                "
                  to={data ? data.url : '#'}
                >
                  {data ? data.subtitle : 'Spotify'}
                </Link>
                <span> • 1,010 likes</span>
                <span className="text-white">
                  • 47 songs,{" "}
                  <span className="text-neutral-400">about 2 hr</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <div
        className="
        flex-1
        "
      >
        <PlaylistContent songs={data} />
      </div>
    </div>
  );
};

export default Playlist;
