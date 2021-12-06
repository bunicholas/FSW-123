import { useState, useEffect } from 'react'

function GiphySearch(props) {

    const [imgSrc, setImgSrc] = useState('')

    function getImage(query = props.default) {

        const apiKey = 'qHAyiFwjbHYOfPSmCpiCAJYbHwFuQsYv'

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`

        fetch(url, {method: 'GET'})
            .then(function (response) {
                return response.json()
            })
            .then(function(data) {
                setImgSrc(data.data[0].images.downsized.url)
            })
    }

    function formSubmit(e) {
        e.preventDefault()
        // alert(e.target.mySearch.value)
        let userSearch = e.target.mySearch.value
        getImage(userSearch)

    }

    useEffect(getImage, [props.default])
    
    return (
        <div>
            <h1>Giphy Search</h1>

            <form onSubmit={formSubmit}>
                Enter a word or phrase:
                <input type="text" name="mySearch" />
                <button type="submit">Search</button>
            </form>

            <img src={imgSrc} alt="" />
        </div>
    )
}

export default GiphySearch