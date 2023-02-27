import { useState } from "react";
import { storage } from "./FireBase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function STORE() {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/Images/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          alert("Upload Completed");
        });
      }
    );
  };
  return (
    <div>
      <center>
        <input type="file" onChange={handleChange} accept="/file/*" />
        <button type="button" onClick={handleUpload} className="button-85"> Upload </button>
        <p>{percent} % Done</p>
      </center>
    </div>
  );
}
export default STORE;
