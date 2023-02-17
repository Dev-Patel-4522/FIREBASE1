import {
    getFirestore,
    collection,
    addDoc,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import { app } from "./FireBase";
const firestore = getFirestore(app);
function FIRESOTRE() {
    const writeData = async () => {
      const result = await addDoc(collection(firestore, "cities"), {
        name: "Delhi",
        pincode: 1234,
        lat: 123,
        long: 456,
      });
      console.log("Result",result);
    };
    const makeSubCollection = async () => {
        await addDoc(collection(firestore, "cities/1EYcr1ISqoXq0DICLXsx/places"),
        {
            name: "this is a place2",
            desc: "this is description",
            date: Date.now(),
        });
    };
    const getDocument = async () => {
        const ref = doc(firestore,"cities","9tdfgfgsvdxgvfxf34715");
        const snap = await getDoc(ref);
        console.log(snap.data());
    };
    const update = async () => {
        const docRef = doc(firestore, "cities", "9m50qJ9CBtlWNJeX2dRd");
        await updateDoc(docRef, { name: "New Delhi"});
    };
    return(
        <div className="App">
            <h1>Firestore</h1>
            <button onClick={writeData}>Put Data</button>
            <button onClick={makeSubCollection}>Put SubData</button>
            <button onClick={getDocument}>Get Document</button>
            <button onClick={update}>Update</button>
        </div>
    );
}

export default FIRESOTRE;