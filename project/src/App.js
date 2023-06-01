import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path: '/', element: <Homepage />, errorElement: <ErrorPage />, children: [
    {path: 'search', element: <SearchPage />},
    {path: 'search/result', element: <SearchResultPage />},
    {path: 'challenge', element: <ChallengePage /> },
    {path: 'auth', element: <AuthenticationPage /> },
    {path: 'auth/findpw', element: <FindPwPage /> },
    {path: 'mypage', element: <MyPage />, children: [
      {path: 'account', element: <AccountPage />},
      {path: 'recent', element: <RecentReadsPage />},
      {path: 'tobe', element: <ToBeReadsPage />},
      {path: 'mychallenge', element: <ChallengeRoot />, children: [
        {index: true, element: <MyChallengePage />},
        {path: 'new', element: <NewChallengePage />},
        {path: ':challengeId', element: <MyChallengeDetailPage />}
      ]},
      {path: 'review', element: <ReviewPage />},
      {path: 'review/new', element: <NewReviewPage />},
      {path: 'memo', element: <MemoPage />}
    ]}
  ]}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
