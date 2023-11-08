function ImageWithText(props) {
    return (
    <div>
        <img src={props.image} alt="Una imagen" width="200" height="400"/>
        <p>{props.text}</p>
    </div>
    );
}
export default ImageWithText;