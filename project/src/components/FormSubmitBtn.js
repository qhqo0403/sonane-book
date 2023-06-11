const FormSubmitBtn = (props) => {
  return (
    <button
      name="submit"
      type="submit"
      className="block w-full mt-12 py-4 rounded-md text-center bg-emerald-600 text-white"
    >
      {props.value}
    </button>
  );
};

export default FormSubmitBtn;
