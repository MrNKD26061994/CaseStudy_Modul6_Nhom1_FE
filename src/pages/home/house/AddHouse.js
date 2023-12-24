import "./CSS-ListHouse.css"
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {addHouse, addImages, editDetailHouse, pushImage, pushThumbnail} from "../../../services/houseService";
import {toast} from "react-toastify";
import uploadIMG from "../../../firebase/uploadIMG";
import {MdCloudUpload} from "react-icons/md";
import {v4} from "uuid";
import {storage} from "../../../firebase/firebase";
import {getDownloadURL,ref,                                                        uploadBytesResumable} from "firebase/storage";
import {editDetailUser} from "../../../services/userService";
import {
    AddHouseSchema,
    AddressHouseSchema,
    EmailSchema,
    FirstLastNameSchema,
    NameHouseSchema,
    PhoneSchema
} from "../../../validate/validate";
import icon1 from "../../../assets/imgs/container/aaa.webp";
import icon2 from "../../../assets/imgs/container/bbb.webp";
import icon3 from "../../../assets/imgs/container/ccc.webp";


export default function AddHouse() {
    const [showAddHouseModal, setShowAddHouseModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const house = useSelector( state => {
        // console.log(state)
        return state;
    })
    const images = useSelector( state => {
        // console.log(state.house.images)
        return state.house.images;
    })
    const thumbnail = useSelector(state => {
        console.log(state.house.thumbnail)
        return state.house.thumbnail;
    })

    const handleAddHouse = async (values) => {
        let id = JSON.parse(localStorage.getItem("user")).id
        let data = {...values, owner: {id: id}, thumbnail: thumbnail}
        await dispatch(addHouse(data)).then((res) => {
            console.log(res.payload)
            if(res.type === 'house/addHouse/rejected') {
                navigate('/user-info')
                toast.error("Cập nhật thất bại!");
            } else {
                dispatch(addImages({urls: images, id: res.payload.id}))
                navigate('/houses')
                toast.success("Cập nhật thành công!");
            }
        })
    }
    const uploadThumbnail = (event) => {
        if (event.target.files[0] == null) return;
        const thumbnailRef = ref(storage, `images/${event.target.files[0].name + v4()}`);
        const {name} = event.target;
        toast.info("Đang tải ảnh lên", {autoClose: 500,});
        uploadBytesResumable(thumbnailRef, event.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                dispatch(pushThumbnail(url))
                })
            });
    }


    return (
        <>
            <div className="container" style={{marginTop: "80px"}}>

                <div className="nav-userInfo">
                    <nav style={{padding: '0'}} aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0" style={{background: 'none', padding: "12px 16px 12px 0"}}>
                            <li className="breadcrumb-item" style={{color: "black"}}><Link to={'/'}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin cá nhân</li>
                        </ol>
                    </nav>
                </div>
                <h1 style={{textAlign:"left", marginBottom: "40px"}}>Thêm căn nhà</h1>

                <div className="user-info">
                    <div className={`user-info-left w-65`}>
                        <Formik initialValues={{name: '', address: '', bedroom: '', bathroom: '',description: '', price: ''}}
                                validationSchema={AddHouseSchema}
                                onSubmit={(values) => {
                            handleAddHouse(values)

                        }}>
                            <Form>
                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3">
                                        <div>Tên nhà</div>
                                    </div>
                                    <div className="w-70 pb-3 color-red">
                                        <Field type="text" className="form-control" placeholder="Nhập tên nhà"
                                               name="name"/>
                                        <ErrorMessage  name={'name'}></ErrorMessage>
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3">
                                        <div>Địa chỉ</div>
                                    </div>
                                    <div className="w-70 pb-3 color-red">
                                        <Field type="text" className={'form-control'} name={'address'} placeholder="Nhập địa chỉ"/>
                                        <ErrorMessage name={'address'}></ErrorMessage>
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3 ">
                                        <div>Số phòng ngủ</div>
                                    </div>
                                    <div className="w-70 pb-3">
                                        <Field as="select" className="form-select" name="bedroom">
                                            <option value="">---Vui lòng chọn---</option>
                                            {Array.from({length: 10}, (v, i) => (
                                                <option value={i + 1} key={i + 1}>{i + 1}</option>
                                            ))}
                                        </Field>
                                        {/*<ErrorMessage name="bedroom" className="text-danger" component="small"/>*/}
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3">
                                        <div>Số phòng tắm</div>
                                    </div>
                                    <div className="w-70 pb-3">
                                        <Field as="select" className="form-select" name="bathroom">
                                            <option value="">---Vui lòng chọn---</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Field>
                                        {/*<ErrorMessage name="bathroom" className="text-danger" component="small"/>*/}
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3 ">
                                        <div>Mô tả chi tiết</div>
                                    </div>
                                    <div className="w-70 pb-3 color-red">
                                        <Field type="text" className={'form-control'} name={'description'} placeholder="Nhập mô tả" />
                                        <ErrorMessage name={'description'}></ErrorMessage>
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3">
                                        <div>Giá tiền (VNĐ/ngày)</div>
                                    </div>
                                    <div className="w-70 pb-3 color-red">
                                        <Field className="form-control" id="price" type="number" name="price"
                                               placeholder="Nhập giá tiền"/>
                                        <ErrorMessage name={'price'}></ErrorMessage>
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3">
                                        <div>Thêm ảnh</div>
                                    </div>
                                    <div className="w-70 pb-3">
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
                                                <MdCloudUpload
                                                    color={"#1475cf"} size={60}/>
                                            }
                                        </form>
                                    </div>
                                </div>

                                <div className={`info-item blogEdit d-flex align-items-center justify-content-center`}>
                                    <div className="w-30 pb-3">
                                        <div>Thêm ảnh bìa</div>
                                    </div>
                                    <div className="w-70 pb-3">
                                        <form className='identify'
                                              onClick={() => document.querySelector("#thumbnail").click()}>
                                            <input type="file" id="thumbnail" name="thumbnail" onChange={(event) => {
                                                uploadThumbnail(event)
                                            }} hidden accept={"image/jpeg ,image/png"}/>
                                            {house.thumbnail ?
                                                <img src={house.thumbnail} id="frontside" width={'150px'} height={'150px'} alt={'img'}/>
                                                :
                                                <MdCloudUpload
                                                color={"#1475cf"} size={60}/>
                                            }
                                        </form>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Đăng ký nhà</button>

                            </Form>
                        </Formik>
                    </div>
                    <div className="user-info-right w-30">
                        <div className="user-right">
                            <div className="user-right-item">
                                <img style={{width: '80px', height: '60px'}} src={icon1} alt=""/>
                                <h5>Chia sẻ thông tin về chỗ ở của bạn cho chúng tôi</h5>
                                <p>Chia sẻ một số thông tin cơ bản, như vị trí của nhà/phòng cho thuê và số lượng khách có thể ở tại đó.</p>
                            </div>
                            <hr/>
                            <div className="user-right-item">
                                <img style={{width: '80px', height: '60px'}} src={icon2} alt=""/>
                                <h5>Làm cho nhà/phòng cho thuê trở nên nổi bật</h5>
                                <p>Thêm từ 5 ảnh trở lên cùng với tiêu đề và nội dung mô tả – chúng tôi sẽ giúp bạn thực hiện.</p>
                            </div>
                            <hr/>
                            <div className="user-right-item">
                                <img style={{width: '80px', height: '60px'}} src={icon3} alt=""/>
                                <h5>Hoàn thiện và đăng mục cho thuê</h5>
                                <p>Lựa chọn xem bạn muốn bắt đầu với việc đón tiếp khách có kinh nghiệm, chọn giá khởi điểm hay đăng mục cho thuê.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}