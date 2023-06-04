import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import SearchPage from "./pages/Search";
import SearchResultPage from "./pages/SearchResult";
import ChallengePage from "./pages/Challenge";
import AuthenticationPage from "./pages/Authentication";
import FindPwPage from "./pages/FindPw";
import MyPage from "./pages/My";
import AccountPage from "./pages/Account";
import RecentReadsPage from "./pages/RecentReads";
import ToBeReadsPage from "./pages/ToBeReads";
import ChallengeRoot from "./pages/MyChallengeRoot";
import MyChallengePage from "./pages/MyChallenge";
import NewChallengePage from "./pages/NewChallenge";
import MyChallengeDetailPage from "./pages/MyChallengeDetail";
import ReviewPage from "./pages/Review";
import NewReviewPage from "./pages/NewReview";
import MemoPage from "./pages/Memo";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "search/result", element: <SearchResultPage /> },
      { path: "challenge", element: <ChallengePage /> },
      { path: "auth", element: <AuthenticationPage /> },
      { path: "auth/findpw", element: <FindPwPage /> },
      {
        path: "mypage",
        element: <MyPage />,
        children: [
          { path: "account", element: <AccountPage /> },
          { path: "recent", element: <RecentReadsPage /> },
          { path: "tobe", element: <ToBeReadsPage /> },
          {
            path: "mychallenge",
            element: <ChallengeRoot />,
            children: [
              { index: true, element: <MyChallengePage /> },
              { path: "new", element: <NewChallengePage /> },
              { path: ":challengeId", element: <MyChallengeDetailPage /> },
            ],
          },
          { path: "review", element: <ReviewPage /> },
          { path: "review/new", element: <NewReviewPage /> },
          { path: "memo", element: <MemoPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
