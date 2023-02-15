import CreateUserModal from "./components/CreateUserModal";
import InputField from "./components/InputField";
import UserDetailsCard from "./components/UserDetailsCard";


function App() {
  return (
    <div className="container mt-5">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" class="btn btn-primary mt-3 text-end">
          Add User
        </button>
      </div>
      <CreateUserModal show={true}/>
      <div className="mt-5 d-flex flex-wrap gap-4 ">
        <UserDetailsCard name="rasul" dob={new Date("1999-03-20")} gender="male" city="tvm" />
        
      </div>
     
    </div>
  );
}

export default App;
