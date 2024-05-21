import {useState} from 'react'

interface PostProps {
  title: string
  content: string[]
  onItemSelected: (index: number) => void
}

function PostList({title, content}: PostProps){
  console.log("Post")
  const [clickedIndex, setClickedIndex] = useState(-1)
  // const array: string[]=[]

  const onClick = (index:number, item: string): void => {
    console.log("You clicked on item", index, item)
    setClickedIndex(index)
  }
  return (
    <>
     <h1>{title}</h1>

    {content.length === 0 && <p>There are no items</p>}
    <ul className="list-group">
      {
      content.map(
        (item, index) => {
          return (
            <li 
            
              className={(clickedIndex == index)? "list-group-item active" : "list-group-item"} 
              key = {index}
              onClick={()=>onClick(index, item)}
              >An item: {item} index {index}</li>
            )
        }
      )}
    </ul>
    </>
  )
}


function App() {
  console.log("App")
    const array = ["An item", "A second item", "A third item", "A fourth item", "And a fifth item"]
    //array for colors
    const array2 = ["red", "blue", "green", "yellow", "purple"]
  return (
    <div>
      <div className = "alert alert-warning alert dismissble fade show" role = "alert">
        <strong>Warning!</strong> A simple warning alert—check it out!
        <button type = "button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      <PostList title='This My Title' content={array} onItemSelected={(index)=> {console.log("item selected in first list" + index)}} />
      <PostList title='This My Color' content={array2} onItemSelected={(index)=> {console.log("color selected " + array2[index])}}/>
      <button type = "button" className="btn btn-primary" onClick={()=> {console.log("click")}}>primary</button>

    
    </div>
     
  )
}


export default App
