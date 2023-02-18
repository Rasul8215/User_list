import CreateUserModal from "./components/CreateUserModal";
import InputField from "./components/InputField";
import UserDetailsCard from "./components/UserDetailsCard";
import { useEffect, useState } from "react";
import  Button  from "./components/Button"

function App() {
  const [showUserModal,setShowUserModal]=useState(false)
  const [users,setUsers]=useState([])
 // [{name:"sfdvj",dob:new Date(),gender:"Male",city:"tvm",id:new Date()}]
  const [searchUsers,setSearchUsers]=useState("")
  const [displayUsers,setDisplayUsers]=useState([])
  useEffect(()=>{
    setDisplayUsers(users.filter((user)=>{
      return user.name.includes(searchUsers)
    }))
  },[users,searchUsers])
  return (
    <div className="container mt-5">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e)=>{
            setSearchUsers(e.target.value)
          }}
        />
      </div>
      <div className="d-flex justify-content-end mt-3">
       
        <Button type="primary"  onClick={()=>{
          setShowUserModal(true)
        }} >Add User</Button>
      </div>
     
      <CreateUserModal show={showUserModal} closeModal={setShowUserModal} createUser={setUsers}/>
      <div className="mt-5 d-flex flex-wrap gap-4 ">
        
        {displayUsers.map((user)=>{
          return <UserDetailsCard name={user.name} dob={new Date(user.dob)} gender={user.gender} city={user.city} key={user.id} 
          deleteUser={setUsers} id={user.id}/>
        })}
      </div>
     
    </div>
  );
}

export default App;
