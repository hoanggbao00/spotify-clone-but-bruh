// ICON
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
// COMPONENTS
import DropdownUser from '../DropdownUser';
import Button from '../Button';
// MODULES
import { twMerge } from 'tailwind-merge';
// REACT + REDUX
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalLogin } from '../../redux/modalSlice';
import { spotifyState, setUserProfile } from '../../redux/spotifySlice';


interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className}) => {
  const profileSelector:any = useSelector(spotifyState).profile
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setTimeout(() => {
      dispatch(setUserProfile(null))
    }, 1000);
  };

  const handleSignUp = () => {};

  const handleLoginModal = (type: string) => {
    if (type === 'open') {
      dispatch(handleModalLogin(true));
    } else dispatch(handleModalLogin(true));
  };

  return (
    <div
      className={twMerge(
        `
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
    `,
        className
      )}
    >
      <div
        className="
      w-full
      mb-4
      flex
      items-center
      justify-between
      "
      >
        <div
          className="
          hidden
          md:flex
          gap-x-2
          items-center
        "
        >
          <button
            onClick={() => navigate(-1)}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
            rounded-full
            p-2
            bg-white
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
          "
          >
            <HiHome className="text-black" size={20} onClick={() => navigate('/')}/>
          </button>
          <button
            className="
            rounded-full
            p-2
            bg-white
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
          "
          >
            <BiSearch className="text-black" size={20} onClick={() => navigate('/search')}/>
          </button>
        </div>
        {profileSelector ? (
          <div className="flex gap-x-6 items-center">
            <Button onClick={handleLogout} className="bg-white px-6 py-2">
              Logout
            </Button>
            <DropdownUser name={profileSelector.name} imgUrl={profileSelector.avatar[0].url}/>
          </div>
        ) : (
          <div
            className="
          flex
          justify-between
          items-center
          gap-x-4
        "
          >
            <>
              <div>
                <Button
                  onClick={handleSignUp}
                  className="bg-transparent
              text-neutral-300
              font-medium
            "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => {
                    handleLoginModal('open');
                  }}
                  className="
                bg-white
                px-6
                py-2 "
                >
                  Log in
                </Button>
              </div>
            </>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Header;
