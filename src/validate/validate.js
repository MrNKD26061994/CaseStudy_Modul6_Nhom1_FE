import * as Yup from "yup";
import {checkEmail, checkUsername} from "../services/userService";

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
        .required('Vui lòng nhập email')
        .email('Email không hợp lệ')
        .test('uniqueEmail', 'Email đã tồn tại', async (value) => {
            try {
                await checkEmail(value);
                return true;
            } catch (error) {
                return false;
            }
        })
})
export const PhoneSchema = Yup.object().shape({
    phone: Yup.string()
        .required("Số điện thoại không được để trống")
        .typeError("Số điện thoại phải nhập số")
        .matches(/^0[0-9]{9}$/, "Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số!"),
})
export const RegisterUserSchema = Yup.object().shape({
    username: Yup.string()
        .required('Vui lòng nhập tên đăng nhập')
        .matches(/^[a-zA-ZÀ-ỹ ]+$/, 'Tên đăng nhập không được chứa kí tự đặc biệt')
        .test('uniqueUsername', 'Tên đăng nhập đã tồn tại', async (value) => {
            try {
                await checkUsername(value);
                return true;
            } catch (error) {
                return false;
            }
        }),
    email: Yup.string()
        .required('Vui lòng nhập email')
        .email('Email không hợp lệ')
        .test('uniqueEmail', 'Email đã tồn tại', async (value) => {
            try {
                await checkEmail(value);
                return true;
            } catch (error) {
                return false;
            }
        }),
    password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            'Mật khẩu phải chứa chữ cái viết hoa, viết thường và ký tự số'
        ),
    confirmPassword: Yup.string()
        .required('Vui lòng xác nhận lại mật khẩu')
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp'),
    phone: Yup.string()
        .required("Số điện thoại không được để trống")
        .typeError("Số điện thoại phải nhập số")
        .matches(/^0[0-9]{9}$/, "Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số!"),
})
export const LoginUserSchema = Yup.object().shape({
    username: Yup.string()
        .required('Vui lòng nhập tên đăng nhập')
        .matches(/^[a-zA-ZÀ-ỹ ]+$/, 'Tên đăng nhập không được chứa kí tự đặc biệt')
        ,

    password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        ,
})
export const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('Mật khẩu cũ không được bỏ trống')
        ,
    newPassword: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            'Mật khẩu phải chứa chữ cái viết hoa, viết thường và ký tự số'
        ),
    confirmNewPassword: Yup.string()
        .required('Vui lòng xác nhận lại mật khẩu')
        .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không khớp'),
})



