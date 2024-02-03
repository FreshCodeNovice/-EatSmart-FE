import type { Meta, StoryObj } from '@storybook/react';
import SocialLoginButton from './index';
import KakaoButton from '../../../public/SVG/kakao.svg'
import Image from 'next/image';
const meta = {
  title: '소셜 로그인 버튼',
  component: SocialLoginButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SocialLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KakaoSocialLoginButton:Story = {
    args:{
        icon:<Image src = {KakaoButton} width={50} height={50} alt = "카카오 로그인 버튼" />,
        text:'카카오로 계속하기',
        backGroundColor:'#FFD231'
    }
}