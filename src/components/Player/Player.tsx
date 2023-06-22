import PlayerContent from './PlayerContent'

const Player = () => {

  const data = [
    {
      key: '1',
      title: 'Peaceful Piano',
      artists: [
        {
          id: 'hoanggbao',
          adamid: 'hoanggbao',
        },
      ],
    },
  ];

  return (
    <div
      className='
        fixed
        hidden
        md:flex
        bottom-0
        bg-black
        w-full
        py-2
        h-[100px]
        px-4
      '
    >
      <PlayerContent song={data}/>
    </div>
  )
}

export default Player