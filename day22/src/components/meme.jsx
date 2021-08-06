import {useState} from 'react'

function Meme({meme, setMeme}){
    const [form, setForm] = useState({
        template_id: meme.id,
        username : "ms25",
        password: "imgfliptest",
        boxes: [],
    })
    const generateMeme = () => {
        let captionUrl = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index)=> {
            captionUrl+= `&boxes[${index}][text]=${box.text}`;
        });
        fetch(captionUrl).then(res => res.json())
        .then((data) => {
            setMeme({...meme, url: data.data.url})
        });
    };
    console.log(meme);
    return <div className="meme">
        <img src={meme.url} alt="" />
        <div>
            {[...Array(meme.box_count)].map((_, index) => (
            <input key = {index} type="text" placeholder={`Enter Meme Caption ${index + 1}`} onChange={(e) => {
                const newBoxes =  form.boxes;
                newBoxes[index] = {text: e.target.value};
                setForm({...form, boxes: newBoxes})
            }}/>
            ))}
        </div>
        <div>
            <button onClick={generateMeme}>Generate Meme</button>
            <button onClick={() => setMeme(null)}>Choose Template</button>
        </div>
    </div>
}
export default Meme;