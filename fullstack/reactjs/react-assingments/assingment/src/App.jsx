import './App.css'
import ColorPicker from './components/ColorPicker'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import LikeButton from './components/LikeButton'
import ProfileCard from './components/ProfileCard'
import StatusMessage from './components/StatusMessage'
import Timer from './components/Timer'
import TodoList from './components/TodoList'

const todo = [
    {
      id:1,
      title:'TODO1' },
    {
      id:2,
      title:'TODO2' },      
    {
      id:3,
      title:'TODO3' },
    {
      id:4,
      title:'TODO4' },
    {
      id:5,
      title:'TODO5' },
]


function App() {

  return (
    <>
     <Greeting name="Toheed"/>
     <ProfileCard name="Toheed" age="20" location="India"/>
     <StatusMessage status="success" />
     <Counter />
     <LikeButton likecount={5} />
     {/* <Timer start={0} /> */}
     <ColorPicker color="red"/>
     <TodoList todos={todo} />

    </>
  )
}

export default App
