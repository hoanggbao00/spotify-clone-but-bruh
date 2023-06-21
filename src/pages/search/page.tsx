import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SearchContent from '../../components/Searchpage/SearchContent';
import SearchInput from '../../components/Searchpage/SearchInput';
import SpotifyAPI from '../../api/spotify';

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = ({ searchParams }: SearchProps) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length < 3) return setData(null);

    const timer = setTimeout(() => {
      setIsSearching(true);
      SpotifyAPI.getSearch(value).then((response) => {
        setData(response.tracks.hits);
        setIsSearching(false);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div
      className="
      bg-neutral-900
      rounded-lg
        w-full
        h-full
        overflow-hidden
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput value={value} onChange={handleOnChange} />
          <>
            {data && <SearchContent songs={data} />}
            <div className="py-10">
              <h1 className="text-center text-neutral-400 font-bold text-5xl">
                {!data &&
                  (value.length > 3
                    ? `Searching ${value}...`
                    : isSearching === false
                    ? `Type at least 3 characters to search`
                    : 'Request timeout or error')}
              </h1>
            </div>
          </>
        </div>
      </Header>
    </div>
  );
};

export default Search;
