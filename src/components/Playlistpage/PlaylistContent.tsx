import { FaPlay } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import DataTable from "../DataTable";

interface PlaylistContentProps {
  songs: Track[] | any;
}

const PlaylistContent: React.FC<PlaylistContentProps> = ({ songs }) => {

  const isHearted = false;
  const columns:DataTableColumn[] = [
    {
      headerAccessKey: "index",
      title: "#",
    },
    {
      headerAccessKey: "name",
      title: "Title",
      span: 1,
    },
    {
      headerAccessKey: "album",
      title: "Album",
      span: 1,
    },
    {
      headerAccessKey: "release_date",
      title: "Date Added",
      span: 1,
    },
    {
      headerAccessKey: "duration_ms",
      title: 'Genres',
      text: "right",
    },
  ];
  return (
    <div
      className="
      flex flex-col
      p-6
      py-3
      h-full
      gap-2
    "
    >
      <div className="flex gap-x-4">
        <div
          className="
            transition
            rounded-full
            flex
            items-center
            justify-center
            bg-green-400
            p-4
            drop-shadow-md
            hover:scale-110
          "
        >
          <FaPlay className="text-black text-2xl" />
        </div>
        <div
          className="
            transition
            rounded-full
            flex
            items-center
            justify-center
            drop-shadow-md
            hover:scale-110
            cursor-pointer
          "
        >
          {isHearted ? (
            <AiFillHeart className="text-green-400 text-4xl" />
          ) : (
            <AiOutlineHeart className="text-neutral-300 hover:text-white text-4xl" />
          )}
        </div>
        <div className="flex items-center group">
          <BsThreeDots className="text-4xl text-neutral-400 group-hover:text-white cursor-pointer" />
        </div>
      </div>
      <div className="flex-1  h-full">
        <DataTable columns={columns} data={[songs]} />
      </div>
    </div>
  );
};

export default PlaylistContent;
