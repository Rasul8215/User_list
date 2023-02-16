import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

const CreateUserModal = (props) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("");

  return (
    <div
      hidden={!props.show}
      className="card"
      style={{
        width: "500px",
        margin: "auto",
        backgroundColor: "#eee",
        position: "absolute",
        zIndex: "50",
        right: "35%",
      }}
    >
      <div className="card-body gap-3">
        <InputField
          type="text"
          id="name"
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <InputField
          type="date"
          id="dob"
          label="Date of birth"
          onChange={(e) => {
            setDob(e.target.value);
          }}
          value={dob}
        />
        <div class="form-outline mb-2">
          <label class="form-label" for="gender">
            Gender
          </label>
          <select
            id="gender"
            class="select form-control "
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value={gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Binary">Binary</option>
          </select>
        </div>
        <InputField
          type="text"
          id="city"
          label="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        />
        <div className="d-flex justify-content-end gap-3 mt-3">
          <Button
            type="secondary"
            onClick={() => {
              props.closeModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => {
              props.createUser((previous) => {
                return [
                  {
                    name,
                    dob,
                    gender,
                    city,
                    id: new Date(),
                  },
                  ...previous,
                ];
              });
              setName("")
              setDob("")
              setGender("Male")
              setCity("")
              props.closeModal(false)
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
