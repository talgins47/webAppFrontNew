
function Post(){

  return (
    <ul className="list-group">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li>
  </ul>
  )
}


function App() {
  return (
    <>
      <h1>My First List</h1>
      <Post />
    </>
     
  )
}

export default App
