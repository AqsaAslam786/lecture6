import Total_members from "./Component/Total_members"

function App() {
  

  return (
    < >
    <div className="flex">

    <div className="h-28 w-1/4">
    <Total_members num="12768" title="Total Members "/>
    </div>
    <div className="h-28 w-1/4">
    <Total_members num="39265" title="Total Posts"/>
    </div>
    <div className="h-28 w-1/4">
    <Total_members num="142334" title="Total Comments"/>
    </div>
    <div className="h-28 w-1/4">
    <Total_members num="34.14%" title="Server Load"/>
    </div>
    </div>
    </>
  )
}

export default App
