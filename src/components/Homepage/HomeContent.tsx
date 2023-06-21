import SongItem from '../SongItem';

interface HomeContentProps {
  songs: [];
}

const HomeContent: React.FC<HomeContentProps> = ({ songs }) => {
  const handleClick = (url: string) => {
    window.open(url);
  };

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs avaiable.</div>;
  }

  return (
    <div
      className="
      grid grid-cols-2
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-8
      gap-4
      mt-4
      overflow-hidden
      flex-nowrap
      "
    >
      {songs &&
        songs.map((song: any) => (
          <SongItem
            key={song.id}
            data={{
              id: song.id,
              title: song.name,
              author: song.owner ? song.owner.name : 'hoanggbao',
              image: song.images ? song.images[0][0].url : song.cover[0].url,
            }}
            onClick={() => handleClick(song.shareUrl)}
          />
        ))}
    </div>
  );
};

export default HomeContent;
