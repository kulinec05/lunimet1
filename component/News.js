import React from "react";

const News = (props) => {
    const id = props.value.id
    const title = props.value.title
    const score = props.value.score
    const by = props.value.by
    const time = props.value.time

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


    return <div>
        <li>
            <ul>
                <div> story by {by}:</div><button onClick={props.useprops} >  {title}</button>
                <div> rating : {score}</div>
                <div> published time : {timeConverter(time)}</div>
                <div>comments: {(props.value.kids|| []).length}</div>
            </ul>
        </li>
    </div>
}

export default News;
