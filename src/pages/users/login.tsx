import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = router.asPath.split('=')[1];
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      router.push('/');
    }
  }, [router, router.asPath]);
  return (
    <button>
      <a href={`${process.env.REACT_APP_KAKAO_AUTH_URL}`}>
        <div>카카오 아이디로 로그인</div>
      </a>
    </button>
  );
};
export default Login;
