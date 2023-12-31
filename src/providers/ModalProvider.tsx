import { useEffect, useState } from 'react';
import AuthModal from '../components/AuthModal/AuthModal';

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<AuthModal />
		</>
	);
};

export default ModalProvider;
