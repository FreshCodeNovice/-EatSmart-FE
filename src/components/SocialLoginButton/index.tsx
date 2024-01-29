import { ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react';

interface SocialLoginButtonProps extends ComponentPropsWithoutRef<'div'> {
  icon?: ReactElement;
  backGroundColor?: string;
  text: string;
}

const SocialLoginButton = ({
  icon,
  backGroundColor,
  text,
  style,
  ...rest
}: SocialLoginButtonProps) => {
  const buttonStyle: CSSProperties = {
    cursor: 'pointer',
    width: style?.width ?? '350px',
    backgroundColor: backGroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '2px',
    borderRadius: '15px',
    ...style,
  };
  return (
    <div style={buttonStyle} {...rest}>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SocialLoginButton;
