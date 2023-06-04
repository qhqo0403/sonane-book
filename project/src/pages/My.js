import { Outlet } from "react-router-dom";
import MyTabMenu from "../components/MyTabMenu";


const MyPage = () => {
  return (
    <>
      <MyTabMenu />
      <Outlet />
    </>
  )
}

export default MyPage;
