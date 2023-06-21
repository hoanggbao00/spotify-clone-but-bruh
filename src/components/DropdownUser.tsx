import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

interface DropdownMenuProps {
  name: string;
  imgUrl: string;
}

const DropdownUser: React.FC<DropdownMenuProps> = ({ name, imgUrl }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          onClick={() => {}}
          className="
				flex items-center gap-x-2
        rounded-full
				group
        border
				p-2
				pr-8
        text-black
        font-bold
        hover:opacity-100
				hover:scale-110
        transition bg-neutral-500/100
				hover:bg-white
				"
        >
          <img
            src={imgUrl}
            alt="avt"
            className="bg-white p-1 rounded-full w-7 h-7 object-cover group-hover:bg-neutral-500/100"
          />
          <p className='group-hover:text-black text-white h-full'>{name}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black translate-x-[-30%] translate-y-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
