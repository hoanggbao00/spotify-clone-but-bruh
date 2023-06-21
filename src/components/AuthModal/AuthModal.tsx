import Modal from '../Modal';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import AlertMessage from './AlertMessage';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalLogin, modalState } from '../../redux/modalSlice';
import SpotifyAPI from '../../api/spotify';
import { setUserProfile } from '../../redux/spotifySlice';

const AuthModal = () => {
  const dispatch = useDispatch();

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isIncorrect, setIsIncorrect] = useState(false);

  const isOpen = useSelector(modalState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === '' || password === '') return setIsIncorrect(true);

    setIsIncorrect(false);
    SpotifyAPI.getProfile(username).then((data) => {
      dispatch(setUserProfile(data));
      dispatch(handleModalLogin(false));
    }).catch(err => {
      console.log(err);
      dispatch(
        setUserProfile({
          name: 'hoanggbao',
          avatar: [
            {
              url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=178891786069467&height=300&width=300&ext=1689948653&hash=AeQ8ae0cfauQUILbGtA',
              width: null,
              height: null,
            },
          ],
        })
      );
      dispatch(handleModalLogin(false));
    });
  };

  return (
    <Modal title="Login to Spotify" isOpen={isOpen.login}>
      {isIncorrect && (
        <AlertMessage message="Incorrect username or password." />
      )}
      <section
        className="
            flex
            justify-center
            items-center
            flex-col
            gap-y-5
            font-bold
          "
      >
        <button className="auth-item">
          <FcGoogle
            className="
              text-2xl
              text-center
            "
          />
          <p className="flex-1">Continue With Google</p>
        </button>
        <button className="auth-item">
          <FaFacebook
            className="
              text-2xl
              text-center
              text-[#1877F2]
            "
          />
          <p className="flex-1">Continue With Facebook</p>
        </button>
        <button className="auth-item">
          <FaApple
            className="
              text-2xl
              text-center
            " 
          />
          <p className="flex-1">Continue With Apple</p>
        </button>
        <button className="auth-item">
          <p className="flex-1">Continue With Phone Number</p>
        </button>
        <hr className="w-[80%]" />
        <form className="w-[80%]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1 mb-3">
            <Label className="font-bold text-md" htmlFor="username">
              Email or username (type your userId)
            </Label>
            <Input
              className="outline-white"
              id="username"
              placeholder="Email or username"
              autoCapitalize="none"
              autoComplete="false"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-3 relative">
            <Label className="font-bold text-md" htmlFor="password">
              Password
            </Label>
            <Input
              className="outline-white"
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              autoCapitalize="none"
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="text-neutral-400 hover:text-white absolute top-[50%] right-2 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <HiOutlineEye className="text-2xl" />
              ) : (
                <HiOutlineEyeOff className="text-2xl" />
              )}
            </div>
          </div>
          <Button className="mt-5" type="submit">
            Log in
          </Button>
          <Link
            to={'/forgot'}
            className="
            underline block hover:text-green-500 font-medium text-center mt-4
          "
          >
            Forgot your password?
          </Link>
        </form>
        <hr className="w-[80%]" />
        <div>
          <p className="text-md text-neutral-500 font-medium">
            Don't have an account?{' '}
            <Link
              to={'/signup'}
              className="underline text-md text-white hover:text-green-500"
            >
              Sign up for Spotify
            </Link>
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default AuthModal;
