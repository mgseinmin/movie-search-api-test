import { useEffect } from "react"


function Api() {
    const data = null;
    useEffect(() => {
       fetch('http://www.omdbapi.com/?t=batman&apikey=9ea626c0')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error fetching data:', error));
    }, [])
  return (<div>{data}</div>)
}

export default Api