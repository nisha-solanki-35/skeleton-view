import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataCard from '../views/DataCard'

const Posts = () => {

    const [posts, setposts] = useState([])
    const [numberPerPage, setnumberPerPage] = useState(3);
    const [pagination, setpagination] = useState({
        start : 0,
        end : numberPerPage
    })
    const [loading, setloading] = useState();
    const [startLimit, setstartLimit] = useState(0);

    const handleOnClick = (limitEnd) => {
        // console.log("end", limitEnd);
        setstartLimit(limitEnd);
        setpagination({end : pagination.end+numberPerPage});
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 5000);
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=> {
            //  console.log("posts", response.data);
             setposts(response.data);
        })
        .catch(error => console.log(error))
        setnumberPerPage(3);
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, [])
    return (
        <div>
            <h1>Skeleton View</h1>
            <DataCard posts={posts} limit={pagination} handleOnClick={handleOnClick} loading={loading} startLimit={startLimit}></DataCard>
        </div>
    )
}

export default Posts
