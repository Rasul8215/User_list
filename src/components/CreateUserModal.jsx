import InputField from "./InputField"

const CreateUserModal = (props) => {
  return (
    <div
      hidden={!props.show}
      className="card"
      style={{ width: "500px", margin: "auto", backgroundColor: "#eee",position:"absolute",zIndex:"50",right:"35%"}}
    >
      <div className="card-body gap-3">
        <InputField type="text" id="name" label="Name" />
        <InputField type="date" id="dob" label="Date of birth" />
        <div class="form-outline mb-2">
          <label class="form-label" for="gender">
            Gender
          </label>
          <select id="gender" class="select form-control ">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Binary">Binary</option>
          </select>
        </div>
        <InputField type="text" id="city" label="City" />
      </div>
    </div>
  );
};

export default CreateUserModal;
