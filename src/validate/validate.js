import * as Yup from "yup";

export const FirstLastNameSchema = Yup.object().shape({
    firstname: Yup.string()
        .required('Vui lòng không được để trống')
        .matches(/^[a-zA-ZÀ-ỹ ]+$/, 'Họ không được chứa kí tự đặc biệt')
    ,
    lastname: Yup.string()
        .required('Vui lòng không được để trống')
        .matches(/^[a-zA-ZÀ-ỹ ]+$/, 'Tên không được chứa kí tự đặc biệt'),
})

export const EmailSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email')
        // .test('unique', 'Email đã tồn tại', async (value) => {
        //     let checkEmail = await LoginRegisterService.checkEmail(value);
        //     return !checkEmail.data;
})
export const PhoneSchema = Yup.object().shape({
    phone: Yup.string()
        .typeError("Số điện thoại phải nhập số")
        .required("Số điện thoại không được để trống")
        .matches(/^0[0-9]{9}$/, "Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số!"),
})


