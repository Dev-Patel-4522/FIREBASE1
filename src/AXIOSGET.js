import axios from "axios";
import {useEffect, useState } from "react";

function AXIOSDATA() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setMyData(res.data))
            .catch((error)=> alert(error.message));
    }, []);
    return (
        <div>
            {myData.map((post)=> {
                const{ id, title, body} = post;
                return(
                    <div className="card" key={id}>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                );
            })}
        </div>
    );
}
export default AXIOSDATA;