import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import ListItem from '../../components/Header/ListItem';
import SpotifyAPI from '../../api/spotify';
import HomeContent from '../../components/Homepage/HomeContent';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if(data.length !== 0) return;
    SpotifyAPI.getHomeData().then((respose: any) => {
      setData(respose.genres);
    });
  }, []);
  return (
    <div
      className="
    bg-neutral-900
    rounded-lg
    h-full
    w-full
    overflow-hidden
    overflow-y-auto
    "
    >
      <Header>
        <h1
          className="
            text-white
            text-3xl
            font-semibold
          "
        >
          Welcome back
        </h1>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
          "
        >
          <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6 flex flex-col gap-y-3">
        {data &&
          data.map((item:any) => (
            <div key={item.id} className='w-full'>
              <div className="flex justify-between items-center">
                <h1 className="text-white text-2xl font-semibold">
                  {item.name}
                </h1>
              </div>
              <div>
                <HomeContent songs={item.contents.items} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
