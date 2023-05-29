import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path: '/', element: <Homepage />, errorElement: <ErrorPage />, children: [
    {path: 'search', element: <SearchPage />, children: [
      {path: 'result', element: <SearchResultPage />}
    ]},
    {path: 'challenge', element: <ChallengePage /> },
    {path: 'auth', element: <AuthenticationPage />, children: [
      {path: 'findpw', element: <FindPwPage />}
    ]},
    {path: 'mypage', element: <MyPage />, children: [
      {path: 'account', element: <AccountPage />},
      {path: 'recent', element: <RecentReadsPage />},
      {path: 'tobe', element: <ToBeReadsPage />},
      {path: 'mychallenge', element: <MyChallengePage />, children: [
        {path: 'new', element: <NewChallengePage />},
        {path: ':challengeId', element: <MyChallengeDetailPage />}
      ]},
      {path: 'review', element: <ReviewPage />, children: [
        {path: 'new', element: <NewReviewPage />}
      ]},
      {path: 'memo', element: <MemoPage />}
    ]}
  ]}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
