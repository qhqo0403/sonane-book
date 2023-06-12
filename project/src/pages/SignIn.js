import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaKickstarterK } from "react-icons/fa";

const SignInPage = () => {
  return (
    <div className="signin mt-36">
      <h2 className="text-4xl font-bold text-center">로그인</h2>
      <form className="w-96 mx-auto mt-12 p-8 border border-slate-300 rounded-lg">
        <div className="formInput border border-slate-300 rounded-md">
          <div className="block px-4 py-3 border-b border-slate-300">
            <input
              name="email"
              type="text"
              placeholder="이메일"
              required
              className="w-full"
            />
          </div>
          <div className="block px-4 py-3">
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              required
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-2">
          <input name="keep-login" id="keep-login" type="checkbox" />
          <label htmlFor="keep-login">&nbsp;자동 로그인</label>
        </div>
        <button
          name="submit"
          type="submit"
          className="block w-full mt-12 py-4 rounded-md text-center bg-emerald-600 text-white"
        >
          로그인
        </button>
        <div className="mt-2 text-center">
          <span className="mr-2">계정이 없으십니까?</span>
          <Link to="/signup" className="text-emerald-700">
            회원가입
          </Link>
        </div>
        <div className="line relative w-full h-px mt-14 mb-6 bg-slate-300">
          <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-white">
            또는
          </span>
        </div>
        <div className="social w-full">
          <button
            name="google"
            className="block w-full mt-12 py-3 rounded-md text-center bg-black text-white flex justify-center items-center"
          >
            <FaGoogle />
            <span className="ml-6">Google로 시작하기</span>
          </button>
          <button
            name="kakaotalk"
            className="block w-full mt-2 py-3 rounded-md text-center bg-yellow-300 flex justify-center items-center"
          >
            <FaKickstarterK />
            <span className="ml-6">카카오톡으로 시작하기</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
