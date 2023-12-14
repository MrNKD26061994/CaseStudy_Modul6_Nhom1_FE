import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {editDetailHouse, openFormEdit} from "../../../services/houseService";
import {closeFormEdit, getName} from "../../../services/userService";
import {toast} from "react-toastify";
import "./CSS-ListHouse.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FirstLastNameSchema} from "../../../validate/validate";

export default function EditHouse(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const house = useSelector(state => {
        return state.houseDetail.houseDetail
    })

    const showFormEditHouse =  (attribute) => {
        dispatch(openFormEdit()).then(() =>{})
        dispatch(getName(attribute)).then(() => {})
    }
    function offFormEditHouse() {
        dispatch(closeFormEdit()).then(() => {})
        dispatch(getName("")).then(() => {})
    }
    async function handleEditHouse(values, {resetForm}){
        let data = {...house, ...values}
        await dispatch(editDetailHouse(data)).then((res) =>{
            if (res.type === 'house/edit/rejected') {
                navigate('/house-info')
                toast.error("Cập nhật thất bại!");
            } else {
                navigate('/house-info')
                toast.success("Cập nhật thành công!");
            }
        })
        navigate('')
    }

    return(
        <>
            <div className="container">
                <div className="nav-userInfo">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{background: 'none'}}>
                            <li className="breadcrumb-item"><Link to={''}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin căn nhà</li>
                        </ol>
                    </nav>
                </div>
                <h1> Thông tin cá nhân </h1>

                <div className="house-info">
                    <div className={`house-info-left w-70`}>
                        <div className={`info-item ${(attributeName === `Name`) ?
                                                     isActiveEdit ? `noneEdit` : `blogEdit`
                                                     : `blogEdit` }`}>
                            <div className="infoItem-left">
                                <p> Tên ngôi nhà</p>
                                {house.name ?
                                    <p className='color-grey'>{house.name}</p>
                                    :
                                    <p className='color-grey'>aaaaaa</p>
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
                                <p className="color-grey">Đây là tên ngôi nhà của bạn</p>
                                <Formik initialValues={{name: house.name}}
                                        enableReinitialize={true}
                                        // validationSchema={FirstLastNameSchema}
                                        onSubmit={(values,formikBag) => {
                                            handleEditHouse(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6 color-red">
                                                <Field name={'name'} type="text" className={'form-control'} placeholder={'Name:'} />
                                                <ErrorMessage name={'name'}></ErrorMessage>
                                            </div>
                                        </div>
                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}