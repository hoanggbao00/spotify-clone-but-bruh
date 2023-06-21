import { useNavigate } from "react-router-dom";

interface MediaItemProps {
  data: Track;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  data,
  onClick
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if(onClick) {
      return onClick(data.key)
    } else {
      navigate('/playlist')
    }
    //TODO: Default turn on player
  } 

  return ( 
    <div
      onClick={handleClick}
      className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-600/80
        w-full
        p-2
        rounded-md
        cursor-poiter
      "
      >
        <div
          className="
            relative
            rounded-md
            h-[48px]
            w-[48px]
            overflow-hidden
          "
        >
          <img 
            src={(data.images ? data.images.coverart : null )|| './images/liked.png'}
            alt="Library Item"
            className="object-cover"
          />
        </div>
        <div
          className="
            flex
            flex-col
            gap-y-1
            overflow-hidden
          "
        >
          <p className="text-white truncate">{data.title || `Today's Top Hits`}</p>
          <p className="text-neutral-400 text-sm truncate">{(data.artists && data.artists.map(artist => artist.adamid)) + ', ' || 'hoanggbao'}</p>

        </div>
      
    </div>

   );
}
 
export default MediaItem;