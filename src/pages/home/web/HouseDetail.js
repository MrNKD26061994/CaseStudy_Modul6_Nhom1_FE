import "./style.css"
import iconShare from "../../../assets/imgs/web/share.png"
import iconSave from "../../../assets/imgs/web/save.png"
export default function HouseDetail() {
    return (
        <>
            <div className="container">
                <div className="head-container">
                    <h4>La Casa Antigua</h4>
                    <div className="btn-share-save">
                        <div className="b-share">
                            <img src={iconShare} alt=""/>
                            Chia sẻ
                        </div>
                        <div className="b-save">
                            <img src={iconSave} alt=""/>
                            Lưu
                        </div>
                    </div>
                </div>
                    <div className="row house-img">
                        <div className="img-left col-md-6 p-0">
                            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=1200" alt=""/>
                        </div>
                        <div className="img-right col-md-6 p-0">
                            <div className="row m-0">
                                <div className="img-right-item col-md-6 p-0">
                                    <img src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440" alt=""/>
                                </div>
                                <div className="img-right-item col-md-6 p-0">
                                    <img src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440" alt=""/>
                                </div>
                                <div className="img-right-item col-md-6 p-0">
                                    <img src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440" alt=""/>
                                </div>
                                <div className="img-right-item col-md-6 p-0">
                                    <img src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440" alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </>
    )
}