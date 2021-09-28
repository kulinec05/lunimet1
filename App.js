import React, {useEffect, useState} from "react";
import News from "./component/News";


const App = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`)
            .then((res) => res.json())
            .then((data) => {
                data = data.splice(0, 100)
                let valueS = {};
                Promise.all(data.map(value => {
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${value}.json`)
                        .then((res) => res.json())
                        .then((tdata) => {
                            valueS[value] = tdata
                            setData(valueS)
                        })
                }))
            })
    }, [])

setTimeout(()=>{setLoading(true)},3200)
    return (
        <div>
            {loading ? Object.values(data).map(value => {
                return <News key={value.id}
                    value={value}
                useprops={()=>{
                    props.history.push(`${value.id}`)}
                }/>
            }) : <div>Loading ...</div>
            }
        </div>
    );
}

export default App;