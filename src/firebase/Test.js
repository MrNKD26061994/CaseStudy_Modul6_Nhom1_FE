import {toast} from "react-toastify";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {v4} from "uuid" ;
import {storage} from "./firebase";
import {useState} from "react";
import { MdCloudUpload } from "react-icons/md";
export default function Test() {
    const [fileFront, setFileFront] = useState(null);
    const [identifyFront, setIdentifyFront] = useState(null);

    const uploadIdentify = (event) => {
        if (event.target.files[0] == null) return;
        const imageRef = ref(storage, `images/${event.target.files[0].name + v4()}`);
        const {name} = event.target;
        toast.info("Đang tải ảnh lên", {position: "top-center", autoClose: 500,});
        uploadBytesResumable(imageRef, event.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                toast.success("Tải ảnh thành công", {position: "top-center", autoClose: 2000,});
                if (name === "frontside") {
                    setIdentifyFront(url);
                } else if (name === "backside") {
                    // setIdentifyBack(url)
                }
            });
        })
    }

    return (
        <>
            AAAAAAAAA
            <form className='identify'
                  onClick={() => document.querySelector("#frontsideFile").click()}>
                <input type="file" id="frontsideFile" name="frontside" onChange={(event) => {
                    event.target.files[0] && setFileFront(event.target.files[0].name);
                    uploadIdentify(event)
                }} hidden accept={"image/jpeg ,image/png"}/>
                {identifyFront ?
                    <img src={identifyFront} id="frontside" width={'100%'} height={'100%'} alt={'img'}/>
                    :
                    // <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fvi%2Fthumb%2F5%2F5c%2FChelsea_crest.svg%2F1200px-Chelsea_crest.svg.png&tbnid=EAH33eX_SrJJkM&vet=12ahUKEwjp647drImDAxXbfXAKHSTOCm8QMygAegQIARBM..i&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FChelsea_F.C.&docid=BUoJQyBurJOB9M&w=1200&h=1200&q=chelsea&ved=2ahUKEwjp647drImDAxXbfXAKHSTOCm8QMygAegQIARBM"}/>
                    // <MdCloudUpload color={"#1475cf"} size={60} />
                    <MdCloudUpload />
                }
            </form>
        </>
    )
}