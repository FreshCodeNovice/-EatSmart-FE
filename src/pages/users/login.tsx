import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import KakaoLoginImage from '../../../public/SVG/kakao.svg';
import SocialLoginButton from '@/components/SocialLoginButton';
import LoginBannerImage from '../../../public/PNG/SocialLoginBanner.png';

const LoginPageLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

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
    <LoginPageLayout>
      <Image
        src={LoginBannerImage}
        alt="로그인 배너 이미지"
        width={350}
        height={350}
        style={{
          objectFit: 'cover',
          display: 'block',
          borderRadius: '10px',
        }}
      />
      <div>건강한 식사 함께해요!</div>
      <SocialLoginButton
        style={{
          width: '350px',
          height: '3rem',
        }}
        onClick={() => {
          window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_AUTH_URL}`;
        }}
        backGroundColor="#FFD231"
        text="카카오로 계속하기"
        icon={<Image src={KakaoLoginImage} alt="카카오 로그인 이미지" />}
      />
    </LoginPageLayout>
  );
};
export default Login;
