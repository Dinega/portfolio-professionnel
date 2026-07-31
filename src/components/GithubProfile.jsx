import {useEffect, useState } from "react";
export default function Github() {
    const [data ,setData] = useState({});
    useEffect(() => {
        fetch("https://api.github.com/users/Dinega")
        .then(r => r.json())
        ,then(setData);
    }, []);
    return <h2>{data.login} - {data.public_repos}</h2>;
}