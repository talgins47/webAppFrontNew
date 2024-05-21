import { useEffect, useState } from "react";

function StudentsList() {
  console.log("StudentsList")
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect")
  }, [])

  return (
    <div>
        <button className="btn btn-primary" type = 'submit'
        onClick={() => {
        setCount(count + 1) 
        console.log ("click")
        }}>Button</button>
    </div>
  );
}

export default StudentsList