import MediaItem from "../MediaItem";
import LikeButton from "../LikeButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchContentProps {
  songs: Track[] | any;
}

const SearchContent: React.FC<SearchContentProps> = ({
  songs
}) => {
	const navigate = useNavigate()
	const [data, setData] = useState<Track[]>([])

	useEffect(() => {
		if(songs && songs.length === 0) return

		setData(songs)
		
	},[songs])

	const handleClickItem = (key:string) => {
		navigate(`/playlist/${key}`)
	}

	return (
		<div className="flex flex-col gap-y w-full px-6">
			{data && data.map((song:any) => (
				<div key={song.track.key} className="flex items-center gap-x-4 w-full">
					<div className="flex-1">
            <MediaItem key={`${song.track.key}-media`} onClick={() => {handleClickItem(song.track.key)}} data={song.track} />
          </div>
          <LikeButton key={`${song.track.key}-like`} songId={song.id}/>
				</div>
			))}
		</div>
	);
};

export default SearchContent;
