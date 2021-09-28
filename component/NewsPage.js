import React, {useEffect, useState} from "react";

const NewsPage = (props) => {
    const [data,getData]= useState({})
    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${props.match.params.value}.json`)
            .then((res) => res.json())
            .then((data) => {
                getData(data)
            })

}, [])
    const id = data.id
    const title = data.title
    const score = data.score
    const by = data.by
    const time = data.time
    const url = data.url

    function timeConverter(time) {
        let a = new Date(time * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
return (
    <div>
        <a>{url}</a>
        <h2> {title}</h2>
        <div> published time : {timeConverter(time)}</div>
        <h3>{by}</h3>
        <div>comments:<h1>{(data.kids|| []).length}</h1></div>
        <h1>Comments</h1>
    </div>
)
}

export default NewsPage;