import { useState, useEffect } from 'react'
export default function Meme() { 
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    //However, it's perfectly fine to use the useEffect hook this way but using the async and await will make more sense
    /* useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, []) */

    //Also passing the async to a callback function complexity, so this code can be further updated to as follows. To learn more refer to the Scrimba notes doc
    /* useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }, []) */

    useEffect( () => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
            getMemes()
    }, [])

    function getImages(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))

    }
    return(
        <main>
            <div action="" className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form--input" 
                    name='topText' 
                    value={meme.topText} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form--input" 
                    name='bottomText' 
                    value={meme.bottomText} 
                    onChange={handleChange}
                />
                <button id="form--button" onClick={getImages}>Get a new meme image</button>
            </div>
            <div className="meme">
                <h2 className="meme--text top">{meme.topText}</h2>
                <img src={meme.randomImage} id='meme--image'/>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
};
