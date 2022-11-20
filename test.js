
async function yt() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '45236d54d6mshc93d1793ed865acp1804d3jsn85233d493cdc',
            'X-RapidAPI-Host': 'youtube-video-downloader5.p.rapidapi.com'
        }
    };

    let data = await fetch('https://youtube-video-downloader5.p.rapidapi.com/vid/?down=https%3A%2F%2Fyoutu.be%2FIGFdJxkJRC0', options)

}