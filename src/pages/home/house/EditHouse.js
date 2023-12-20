import "./CSS-ListHouse.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {closeFormEdit, editDetailHouse, findHouseById, getName, openFormEdit} from "../../../services/houseService";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
// import {EmailSchema, FirstLastNameSchema, PhoneSchema} from "../../../validate/validate";
import {MdCloudUpload} from "react-icons/md";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";
import {findUserById} from "../../../services/userService";
import icon1 from "../../../assets/imgs/container/1.png";
import icon2 from "../../../assets/imgs/container/1-1.png";
import icon3 from "../../../assets/imgs/container/1-1-2.png";

export default function EditHouse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {id} = useParams();
    useEffect(() => {
        dispatch(findHouseById(id))
    },[])
    const house = useSelector(state => {
        return state.house.houseDetail
    })

    const attributeName = useSelector(state => {
        console.log(state.house.nameEditOne)
        return state.house.nameEditOne
    })
    const isActiveEdit = useSelector(state => {
        console.log("BCSDS",state)
        return state.house.isActiveEdit
    })

    const showFormEditHouse = async (attribute) =>{
        await dispatch(openFormEdit()).then(() => {})
        await dispatch(getName(attribute)).then(() => {})

    }
    function offFormEditHouse() {
        dispatch(closeFormEdit()).then(() => {})
        dispatch(getName("")).then(() => {})
    }

    async function handleEditHouse(values, {resetForm}) {
        let data = {...house,...values}
        console.log(data)
        await dispatch(editDetailHouse(data)).then((res) => {
            if(res.type === 'house/edit/rejected') {
                navigate('/edit-house')
                toast.error("Cập nhật thất bại!");
            } else {
                navigate('/edit-house')
                toast.success("Cập nhật thành công!");
            }
        })
        navigate('')
    }

    return (
        <>
            <div className="container">
                <div className="nav-userInfo">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{background: 'none'}}>
                            <li className="breadcrumb-item"><Link to={''}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin ngôi nhà</li>
                        </ol>
                    </nav>
                </div>
                <h1>Thông tin ngôi nhà</h1>


                <div className="user-info">
                    <div className={`user-info-left w-70`}>
                        <div className={`info-item ${(attributeName === `Name`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Tên ngôi nhà</p>
                                {house.name ?
                                    <p className='color-grey'>{house.name}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            <div className="infoItem-right">
                                {house.name ?
                                    <div onClick={() => showFormEditHouse('Name')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEditHouse('Name')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Name`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Tên ngôi nhà</p>
                                <p className="color-grey">Đây là tên ngôi nhà của bạn trên giấy tờ</p>
                                <Formik initialValues={{name: house.name}}
                                        enableReinitialize={true}
                                        onSubmit={(values,formikBag) => {
                                            handleEditHouse(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-md-12 color-red">
                                                <Field name={'name'} type="text" className={'form-control'} placeholder={'Tên ngôi nhà:'} />
                                                <ErrorMessage name={'name'}></ErrorMessage>
                                            </div>
                                        </div>
                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>
                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEditHouse} className="editBtn">Hủy</div>
                            </div>
                        </div>


                        {/*<div className={`info-item ${(attributeName === `Address`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Địa chỉ</p>*/}
                        {/*        {house.address ?*/}
                        {/*            <p className='color-grey'>{house.address}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.address ?*/}
                        {/*            <div onClick={() => showFormEditHouse('Address')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('Address')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Address`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Địa chỉ </p>*/}
                        {/*        <p className="color-grey">Địa chỉ ngôi nhà của bạn</p>*/}
                        {/*        <Formik initialValues={{address: house.address}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                // validationSchema={EmailSchema}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'email'} type="email" className={'form-control'} placeholder={'Địa chỉ:'} />*/}
                        {/*                        <ErrorMessage name={'email'}></ErrorMessage>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}
                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className={`info-item ${(attributeName === `Province`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Tỉnh/Thành phố</p>*/}
                        {/*        {house.province ?*/}
                        {/*            <p className='color-grey'>{house.province}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.province ?*/}
                        {/*            <div onClick={() => showFormEditHouse('Province')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('Province')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Province`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Tỉnh/Thành phố</p>*/}
                        {/*        <p className="color-grey">Tỉnh/Thành phố</p>*/}
                        {/*        <Formik initialValues={{province: house.province}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*            // validationSchema={PhoneSchema}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'province'} type="text" className={'form-control'} placeholder={'Tỉnh/Thành phố:'} />*/}
                        {/*                        <ErrorMessage name={'province'}></ErrorMessage>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className={`info-item ${(attributeName === `District`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Quận/ Huyện</p>*/}
                        {/*        {house.district ?*/}
                        {/*            <p className='color-grey'>{house.district}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.district ?*/}
                        {/*            <div onClick={() => showFormEditHouse('District')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('District')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `District`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Quận/ Huyện</p>*/}
                        {/*        <p className="color-grey">Quận/ Huyện</p>*/}
                        {/*        <Formik initialValues={{district: house.district}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*            // validationSchema={PhoneSchema}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'district'} type="text" className={'form-control'} placeholder={'Quận/Huyện:'} />*/}
                        {/*                        <ErrorMessage name={'district'}></ErrorMessage>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className={`info-item ${(attributeName === `Bedroom`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Số phòng ngủ</p>*/}
                        {/*        {house.bedroom ?*/}
                        {/*            <p className='color-grey'>{house.bedroom}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.bedroom ?*/}
                        {/*            <div onClick={() => showFormEditHouse('Bedroom')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('Bedroom')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Bedroom`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Số phòng ngủ</p>*/}
                        {/*        <p className="color-grey">Số phòng ngủ trong ngôi nhà của bạn</p>*/}
                        {/*        <Formik initialValues={{bedroom: house.bedroom}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                // validationSchema={PhoneSchema}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'bedroom'} type="text" className={'form-control'} placeholder={'Số phòng ngủ:'} />*/}
                        {/*                        <ErrorMessage name={'bedroom'}></ErrorMessage>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className={`info-item ${(attributeName === `Bathroom`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Số phòng tắm</p>*/}
                        {/*        {house.bathroom ?*/}
                        {/*            <p className='color-grey'>{house.bathroom}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.bathroom ?*/}
                        {/*            <div onClick={() => showFormEditHouse('Bathroom')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('Bathroom')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Bathroom`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Số phòng tắm</p>*/}
                        {/*        <p className="color-grey">Số phòng tắm trong ngôi nhà của bạn</p>*/}
                        {/*        <Formik initialValues={{bathroom: house.bathroom}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'bathroom'} type="text" className={'form-control'} placeholder={'Số phòng tắm:'} />*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className={`info-item ${(attributeName === `Description`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Mô tả chung</p>*/}
                        {/*        {house.description ?*/}
                        {/*            <p className='color-grey'>{house.description}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.description ?*/}
                        {/*            <div onClick={() => showFormEditHouse('Description')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('Description')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Description`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Mô tả chung</p>*/}
                        {/*        <p className="color-grey">Mô tả chung về ngôi nhà của bạn</p>*/}
                        {/*        <Formik initialValues={{description: house.description}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'description'} type="text" className={'form-control'} placeholder={'Mô tả chung về ngôi nhà của bạn:'} />*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className={`info-item ${(attributeName === `Price`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Giá nhà </p>*/}
                        {/*        {house.price ?*/}
                        {/*            <p className='color-grey'>{house.price}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {house.price ?*/}
                        {/*            <div onClick={() => showFormEditHouse('Price')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEditHouse('Price')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Price`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Giá nhà</p>*/}
                        {/*        <p className="color-grey">Giá ngôi nhà của bạn </p>*/}
                        {/*        <Formik initialValues={{price: house.price}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEditHouse(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'address'} type="text" className={'form-control'} placeholder={'Giá ngôi nhà của bạn:'} />*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEditHouse} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}




                        {/*<div style={{paddingBottom: '16px'}} className={`info-item blogEdit`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Ảnh ngôi nhà</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}

                        {/*        <form className='identify'*/}
                        {/*              onClick={() => document.querySelector("#frontsideFile").click()}>*/}
                        {/*            <input type="file" id="frontsideFile" name="avatar" onChange={(event) => {*/}
                        {/*                event.target.files[0] && setFileFront(event.target.files[0].name);*/}
                        {/*                uploadIdentify(event)*/}
                        {/*            }} hidden accept={"image/jpeg ,image/png"}/>*/}
                        {/*            {house.avatar ?*/}
                        {/*                <img src={house.avatar} id="frontside" width={'100%'} height={'100%'} alt={'img'}/>*/}
                        {/*                :*/}
                        {/*                <MdCloudUpload />*/}
                        {/*            }*/}
                        {/*        </form>*/}

                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>
                    <div className="user-info-right w-25">
                        <div className="user-right">
                            <div className="user-right-item">
                                <img src={icon1} alt=""/>
                                <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                                <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                            </div>
                            <hr/>
                            <div className="user-right-item">
                                <img src={icon2} alt=""/>
                                <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                                <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                            </div>
                            <hr/>
                            <div className="user-right-item">
                                <img src={icon3} alt=""/>
                                <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                                <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}