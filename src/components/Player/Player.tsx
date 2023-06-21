import PlayerContent from './PlayerContent'

const Player = () => {

  const song = {
    id: 'song',
    title: 'Peaceful Piano',
    author: 'hoanggbao'
  }

  return (
    <div
      className='
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[100px]
        px-4
      '
    >
      <PlayerContent song={song} songUrl='https'/>
    </div>
  )
}

export default Player