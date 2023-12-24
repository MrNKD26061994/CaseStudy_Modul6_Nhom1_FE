import "./style.css"
import language from "../../assets/imgs/footer/language.png"
export default function Footer() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center footer pt-3 pb-3">
                <div className="footer-left d-flex align-items-center">
                    <span >© 2023 Airbnb, Inc.</span>
                    <ul className='d-flex align-items-center mb-0'>
                        <li className='mr-4'>Quyền riêng tư</li>
                        <li className='mr-4'>Điều khoản</li>
                        <li className='mr-4'>Sơ đồ trang web</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <span><img src={language} alt=""/>Tiếng Việt (VN)</span>
                    <span>$ <span>USD</span></span>
                    <span>Hỗ trợ và tài nguyên</span>
                </div>
            </div>
        </>
    )
}