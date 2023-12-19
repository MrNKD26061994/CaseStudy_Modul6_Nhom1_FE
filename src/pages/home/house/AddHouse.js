import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {addHouse, pushImage} from "../../../services/houseService";
import uploadIMG from "../../../firebase/uploadIMG";
import {toast} from "react-toastify";
import {MdCloudUpload} from "react-icons/md";

export default function AddHouse() {
    const [showAddHouseModal, setShowAddHouseModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector( state => {
        // console.log(state)
        return state;
    })
    const images = useSelector( state => {
        console.log(state)
        return state;
    })

    const handleAddHouse = async (values) => {
        let id = JSON.parse(localStorage.getItem("user")).id
        let data = {...values, owner: {id: id}}
        await dispatch(addHouse(data)).then((res) => {
            console.log(res.payload)
            if(res.type === 'house/addHouse/rejected') {
                navigate('/user-info')
                toast.error("Cập nhật thất bại!");
            } else {
                navigate('/houses')
                toast.success("Cập nhật thành công!");
            }
        })
    }


    return (
        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Thêm nhà</h1>
                <Formik initialValues={{name: '', address: '', bedroom: '', bathroom: '',description: '', price: ''}} onSubmit={(values) => {
                    handleAddHouse(values)
                }}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tên Nhà</label>
                            <Field type="text" className={'form-control'} name={'name'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                            <Field type="text" className={'form-control'} name={'address'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số Phòng ngủ</label>
                            <Field type="text" className={'form-control'} name={'bedroom'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số phòng tắm</label>
                            <Field type="text" className={'form-control'} name={'bathroom'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mô tả chi tiết</label>
                            <Field type="text" className={'form-control'} name={'description'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Giá Nhà</label>
                            <Field type="text" className={'form-control'} name={'price'}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Thêm ảnh</label>
                            <form className='identify'
                                  onClick={() => document.querySelector("#frontSideFile").click()}>
                                <input multiple={true} type="file" id="frontSideFile" name="frontSide" hidden accept={"image/jpeg ,image/png"}
                                       onChange={(event) => {
                                           uploadIMG(event)
                                               .then((urls) => {
                                                   toast.success("Tải ảnh thành công", { position: "top-center", autoClose: 2000 });
                                                   dispatch(pushImage(urls));
                                               })
                                               .catch((error) => {
                                                   console.error("Lỗi:", error);
                                               });
                                       }}
                                />

                                {null ?
                                    <img id="frontside" width={'100%'} height={'100%'} alt={'img'}/>
                                    :
                                    <MdCloudUpload color={"#1475cf"} size={60}/>
                                }
                            </form>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )

}