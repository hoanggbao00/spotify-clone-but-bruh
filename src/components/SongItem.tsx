import { FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type song = {
  id: string;
  title: string;
  author: string;
  image: string;
}

interface SongItemProps {
  data: song;
  onClick: (id: string) => void;
  className?: string;
}

const SongItem: React.FC<SongItemProps> = ({
  data,
  onClick,
  className
}) => {

  return ( 

    <div
      onClick={() => onClick(data.id)}
      className={twMerge(`
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
      `,className)}
    >
      <div
        className="
          relative
          aspect-square
          w-full
          h-full
          rounded-md
          overflow-hidden
        ">
          <img 
            className="object-cover"
            src={data.image || '/images/liked.png'}
            alt="Image"
          />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
      <p className="font-semibold truncate w-full">
        {data.title || `Today's Top Hits`}
      </p>
      <p>
        By {data.author || 'hoanggbao'}
      </p>
      </div>
      <div
				className="
      absolute
      transition
      opacity-0
      rounded-full
      flex
      items-center
      justify-center
      bg-green-500
      p-4
      drop-shadow-md
      right-5
      group-hover:opacity-100
      hover:scale-110
    "
			>
				<FaPlay className='text-black'/>
			</div>
    </div>
   );
}
 
export default SongItem;