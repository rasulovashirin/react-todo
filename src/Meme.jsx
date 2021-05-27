import { useEffect, useState } from 'react'

function Meme () {
    const [image, setImage] = useState()


    useEffect(() => {
        if(image) {
            ;(async () => {
                const url = `http://apimeme.com/meme?${image}&top=stop&bottom=stop`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                // setImage([...data]);
            })()
        }
    }, [image])

    return(
        <>
            <select onChange={e => setImage(e.target.value)}>
                <option value="Ceiling-Cat">Mushuk</option>
                <option value="Big-Ego-Man">Egoist</option>
                <option value="Cool-Obama">Obama</option>
                <option value="Finding-Neverland">Finding-Neverland</option>
                <option value="Scared-Cat">Scared Cat</option>
                <option value="Rich-Guy-Dont-Care">Rich-Guy-Dont-Care</option>
            </select>
        </>


    )
}

export default Meme