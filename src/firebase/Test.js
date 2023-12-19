import {toast} from "react-toastify";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {v4} from "uuid";
import {storage} from "./firebase";
import {MdCloudUpload} from "react-icons/md";
import uploadIMG from "./uploadIMG";

export default function Test() {

    const uploadIdentify = (event) => {
        return new Promise((resolve, reject) => {
            let files = event.target.files;
            if(files.length === 0) return;

            toast.info("Đang tải ảnh lên", {position: "top-center", autoClose: 500,});

            const uploadPromises = [];
            for (let i = 0; i < files.length; i++) {
                const imageRef = ref(storage, `images/${event.target.files[i].name + v4()}`);
                const uploadTask = uploadBytesResumable(imageRef, event.target.files[i]);
                uploadPromises.push(
                    new Promise((resolve, reject) => {
                        uploadTask.then((snapshot) => {
                            getDownloadURL(snapshot.ref).then((url) => {
                                resolve(url);
                            }).catch((error) => {
                                reject(error);
                            });
                        }).catch((error) => {
                            reject(error);
                        });
                    })
                );
            }
            Promise.all(uploadPromises)
                .then((urls) => {
                    toast.success("Tải ảnh thành công", { position: "top-center", autoClose: 2000 });
                    console.log(urls)
                    resolve(urls);
                })
                .catch((error) => {
                    console.error("Lỗi khi tải ảnh lên:", error);
                    reject(error);
                });
        })
    }



    // let input = document.querySelector("#frontSideFile");
    // console.log(input)
    // input && input.addEventListener('change', function (event) {
    //      uploadIMG(event)
    //          .then((urls) => {
    //              toast.success("Tải ảnh thành công", { position: "top-center", autoClose: 2000 });
    //              console.log("Urls:", urls);
    //          })
    //          .catch((error) => {
    //              console.error("Lỗi:", error);
    //          });
    // });

    return (
        <>
            AAAAAAAAA
            <form className='identify'
                  onClick={() => document.querySelector("#frontSideFile").click()}>
                <input multiple={true} type="file" id="frontSideFile" name="frontSide" hidden accept={"image/jpeg ,image/png"}
                    onChange={(event) => {
                        uploadIMG(event)
                            .then((urls) => {
                                toast.success("Tải ảnh thành công", { position: "top-center", autoClose: 2000 });
                                console.log("Urls:", urls);
                            })
                            .catch((error) => {
                                console.error("Lỗi:", error);
                            });
                    }}
                />



                {null ?
                    <img id="frontside" width={'100%'} height={'100%'} alt={'img'}/>
                    :
                    // <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fvi%2Fthumb%2F5%2F5c%2FChelsea_crest.svg%2F1200px-Chelsea_crest.svg.png&tbnid=EAH33eX_SrJJkM&vet=12ahUKEwjp647drImDAxXbfXAKHSTOCm8QMygAegQIARBM..i&imgrefurl=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FChelsea_F.C.&docid=BUoJQyBurJOB9M&w=1200&h=1200&q=chelsea&ved=2ahUKEwjp647drImDAxXbfXAKHSTOCm8QMygAegQIARBM"}/>
                    // <MdCloudUpload color={"#1475cf"} size={60} />
                    <MdCloudUpload />
                }
            </form>
        </>
    )
}