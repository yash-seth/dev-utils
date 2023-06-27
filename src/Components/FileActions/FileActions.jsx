import { useState } from "react";
import storage from "../../FirebaseConfig.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";

import "./FileActions.css"
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FileActions() {
  // State to store uploaded file
  const [file, setFile] = useState("");
  const [URL, setURL] = useState("");
  const [allFiles, setAllFiles] = useState([]);

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setURL(url);
        });
      }
    );
  };

  // fetch from firebase storage
  const getFromFirebase = () => {
    setAllFiles([]);
    let storageRef = ref(storage, `/files/`);
    listAll(storageRef)
      .then((res) => {
        res.items.forEach((imageRef) => {
          getDownloadURL(imageRef).then((url) => {
            setAllFiles((allFiles) => [...allFiles, url]);
          });
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // delete from firebase storage
  const deleteFromFirebase = (url) => {
    const objRef = ref(storage, url);
    deleteObject(objRef)
      .then(() => {
        alert("File deleted successfully!");
        getFromFirebase();
      })
      .catch((error) => {
        alert("There was an error! Please try again.");
      });
  };

  return (
    <>
      <div className="file-actions-main">
        <input type="file" onChange={handleChange} accept="/image/*" />
        <button onClick={handleUpload}>Upload to Firebase</button>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" percent />
          <Box>
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(percent)}%`}
            </Typography>
          </Box>
        </Box>
        <a href={URL}>{URL}</a>
        <button onClick={getFromFirebase}>Fetch files</button>
        <ul>
          {allFiles.map((url, index) => {
            return (
              <>
                <li key={index}>{url}</li>
                <button onClick={() => deleteFromFirebase(url)}>Delete</button>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FileActions;
