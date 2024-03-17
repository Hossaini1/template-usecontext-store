import store from "./store/NameContext"

function App() {
  const { number, setNumber}=store()
  console.log(number);





  return (
    <div>App</div>
  )
}
export default App