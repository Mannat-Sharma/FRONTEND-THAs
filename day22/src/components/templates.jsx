const Templates = ({temp, setMeme}) =>{
    return(
        <div className="templates">
            {temp.map(el =>(
                <div key = {el.id} className="template" onClick={()=>{
                    setMeme(el)
                }}>
                <div style={{backgroundImage: `url(${el.url})`}} className="meme-img" ></div>
                </div>
            ))}
        </div>
    )
}
export default Templates;