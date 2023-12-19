import {toast} from "react-toastify";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "./firebase";
import {v4} from "uuid";

export default function uploadIMG(event) {
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
                        getDownloadURL(snapshot.ref).then((urls) => {
                            resolve(urls);
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
                resolve(urls);
            })
            .catch((error) => {
                reject(error);
            });
    })

}
