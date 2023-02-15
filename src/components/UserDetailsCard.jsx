const UserDetailsCard=(props)=>{
    return (
        <div class="card" style={{width:"fit-content"}}>
        <div class="card-body">
            <p>Name: <span className="fw-bold ms-2">{props.name}</span></p>
            <p>DOB: <span className="fw-bold ms-2">{props.dob.toLocaleString()}</span></p>
            <p>Gender: <span className="fw-bold ms-2">{props.gender}</span></p>
            <p>City: <span className="fw-bold ms-2">{props.city}</span></p>
         
        </div>
      </div>
      
    )
}
export default UserDetailsCard