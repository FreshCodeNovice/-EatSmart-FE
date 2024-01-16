const login = () => {
  return (
    <>
      <button>
        <a href={process.env.REACT_APP_KAKAO_AUTH_URL}>
          <div>카카오 아이디로 로그인</div>
        </a>
      </button>
    </>
  );
};
export default login;
