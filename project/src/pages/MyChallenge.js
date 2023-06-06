import MyChallengeList from "../components/MyChallengeList";

const CHALLENGE = [
  {id: 'c1', title: 'Challenge 1', startDate: '2023-05-10', dueDate: '2023-06-01'},
  {id: 'c2', title: 'Challenge 2', startDate: '2023-05-10', dueDate: '2023-06-01'},
  {id: 'c3', title: 'Challenge 3', startDate: '2023-05-10', dueDate: '2023-06-01'}
]

const MyChallengePage = () => {
  return (
    <>
      <MyChallengeList challenge={CHALLENGE}/>
    </>
  )
};

export default MyChallengePage;
