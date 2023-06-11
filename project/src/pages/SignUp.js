import { useState } from "react";
import FormInput from "../components/FormInput";
import FormSubmitBtn from "../components/FormSubmitBtn";

const SignUpPage = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "text",
      placeholder: "이메일",
      errorMessage: "이메일 주소를 다시 확인해주세요.",
      pattern: "[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "비밀번호",
      errorMessage:
        "최소 1개 이상의 영어 대문자, 소문자, 숫자, 특수문자를 사용하여 8-16자로 만들어주시기 바랍니다.",
      pattern:
        "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,16}$",
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "비밀번호 확인",
      errorMessage: "비밀번호가 일치하지 않습니다.",
      pattern: inputValues.password,
      required: true,
    },
    {
      id: 4,
      name: "nickname",
      type: "text",
      placeholder: "닉네임",
      errorMessage:
        "2-16자의 한글, 영어 소문자, 숫자만 사용 가능하며, 한글 초성 및 모음은 허가하지 않습니다.",
      pattern: "^[a-z0-9가-힣]{2,16}$",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup mt-36">
      <h2 className="text-4xl font-bold text-center">회원가입</h2>
      <form className="w-96 mx-auto mt-12 p-8 border border-slate-300 rounded-lg">
        <div className="formInput border border-slate-300 rounded-md">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <FormSubmitBtn value="가입하기" />
      </form>
    </div>
  );
};

export default SignUpPage;
