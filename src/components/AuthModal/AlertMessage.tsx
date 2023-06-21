import { AiOutlineInfoCircle } from 'react-icons/ai'

interface AlertMessageProps {
  icon?: boolean
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  icon = true,
  message
}) => {
  return ( 
    <div className='
      bg-red-500
      px-4
      py-3
      flex
      items-center
      gap-x-4
      text-white
      font-bold
      overflow-hidden
      w-full
      mb-5
    '>
      {icon === true && <AiOutlineInfoCircle className='
        text-2xl
      '/>}
      <p>{message}</p>
    </div>
   );
}
 
export default AlertMessage;