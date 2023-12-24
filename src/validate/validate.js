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
export const NameHouseSchema = Yup.object().shape({
    name: Yup.string()
        .required("Vui lòng nhập tên ngôi nhà")
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Tên nhà không được chứa kí tự đặc biệt'),
})

export const AddressHouseSchema = Yup.object().shape({
    address: Yup.string()
        .required('Vui lòng nhập địa chỉ ngôi nhà')
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Địa chỉ nhà không được chứa kí tự đặc biệt'),
})
export const BedroomHouseSchema = Yup.object().shape({
    bedroom: Yup.string()
        .required('Vui lòng nhập số phòng ngủ')
        .matches(/^[1-9]\d*$/,'Số phòng ngủ không thể là chữ cái và 0'),
})
export const BathroomHouseSchema = Yup.object().shape({
    bathroom: Yup.string()
        .required('Vui lòng nhập số phòng tắm')
        .matches(/^[1-9]\d*$/,'Số phòng tắm không thể là chữ cái và 0'),
})
export const DescriptionHouseSchema = Yup.object().shape({
    description: Yup.string()
        .required('Vui lòng nhập mô tả')
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Mô tả không thể chứa ký tự đặc biệt'),
})
export const PriceHouseSchema = Yup.object().shape({
    price: Yup.string()
        .required('Vui lòng nhập số tiền')
        .matches(/^[1-9]\d*$/,'Số tiền không thể là chữ cái và 0'),
})
export const AddHouseSchema = Yup.object().shape({
    name: Yup.string()
        .required("Vui lòng nhập tên ngôi nhà")
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Tên nhà không được chứa kí tự đặc biệt')
    ,
    address: Yup.string()
        .required('Vui lòng nhập địa chỉ ngôi nhà')
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Địa chỉ nhà không được chứa kí tự đặc biệt')
    ,
    // bedroom: Yup.string()
    //     .required('Vui lòng nhập số phòng ngủ')
    //     .matches(/^[1-9]\d*$/,'Số phòng ngủ không thể là chữ cái và 0')
    // ,
    // bathroom: Yup.string()
    //     .required('Vui lòng nhập số phòng tắm')
    //     .matches(/^[1-9]\d*$/,'Số phòng tắm không thể là chữ cái và 0')
    // ,
    description: Yup.string()
        .required('Vui lòng nhập mô tả')
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Mô tả không thể chứa ký tự đặc biệt')
    ,
    price: Yup.string()
        .required('Vui lòng nhập số tiền')
        .matches(/^[1-9]\d*$/,'Số tiền không thể là chữ cái và 0'),
})


export const PhoneSchema = Yup.object().shape({
    phone: Yup.string()
        .required("Số điện thoại không được để trống")
        .typeError("Số điện thoại phải nhập số")
        .matches(/^0[0-9]{9}$/, "Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số!"),
})
export const AddressSchema = Yup.object().shape({
    address: Yup.string()
        .required("Địa chỉ không được để trống"),
})

export const RegisterUserSchema = Yup.object().shape({
    username: Yup.string()
        .required('Vui lòng nhập tên đăng nhập')
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Tên đăng nhập không được chứa kí tự đặc biệt')
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
        .matches(/^[a-zA-ZÀ-ỹ0-9 ]+$/, 'Tên đăng nhập không được chứa kí tự đặc biệt')
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



