import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-100 w-screen h-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-7xl mb-16">메인 텍스트입니다.</h2>
        <button
          type="button"
          className="block mx-auto w-40 h-10 border rounded-xl border-teal-700"
          onClick={() => navigate("signin")}
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Landing;
