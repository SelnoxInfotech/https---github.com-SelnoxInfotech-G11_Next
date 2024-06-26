import React from 'react'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import blank_image from "./user1.webp"
export default function CostumerRate({ image }) {

    const imageLoader = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com${src}?w=${width}?h=${100}&q=${quality || 75}`
    }   
    return (

        <div className='container-fluid rate_box '>

            <ScrollContainer className={style.ScrollContainerRelative}>
                <div className='row'>

                    <div className={`${style.CustomerReview}`}>

                        <div className={` ${style.Customer_box}`}>
                            <div   className={`${'col-12 d-flex justify-content-center '} ${style.insideBox} `}>
                                <Image  width={100} height={100}   src={blank_image} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Maria Luisa</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars d-flex">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12 cen '>
                                    <p>G11 one of the best fantasy prediction app. Very nice application easy to use and interfaces is fantastic. There prediction is accurate. Thank You g11 team.</p>
                                </div>

                            </div>
                        </div>

                        <div className={` ${style.Customer_box}`}>
                          <div className={`${'col-12 d-flex justify-content-center '} ${style.insideBox}`}>
                                <Image loader={imageLoader} width={100}  height={100}className='rate_image ' src={blank_image}  alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Bushra Parveen</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars d-flex">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12  cen'>
                                    <p>Very good and genuine app. Pitch report, player performance and cheat sheet help very much to make highly impact team. Everyone should try this. </p>
                                </div>

                            </div>
                        </div>
                
                
        
                        <div className={` ${style.Customer_box}`}>
                          <div className={`${'col-12 d-flex justify-content-center '} ${style.insideBox}`}>
                                <Image  loader={imageLoader} width={100}  height={100}className='rate_image ' src={blank_image}  alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Rishi Singh</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center ' >
                                <div className="stars d-flex">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12  cen'>
                                    <p>{"Very good app. Very good prediction. Really helpful it's give proper prediction, after taking his prediction I have won 10k, guys you really go for it this app."}</p>
                                </div>

                            </div>
                        </div>
               
               
                        <div className={` ${style.Customer_box}`}>
                          <div className={`${'col-12 d-flex justify-content-center '} ${style.insideBox}`}>
                                <Image  loader={imageLoader}width={100}  height={100}className='rate_image ' src={blank_image}  alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Ishaan Sager</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars d-flex">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12 cen'>
                                    <p>Amazing app help so much in making dream team. Very much impssed thank you G11 to make we win a big amount.</p>
                                </div>

                            </div>
                        </div>
                   
             
              
                        <div className={` ${style.Customer_box}`}>
                          <div className={`${'col-12 d-flex justify-content-center '} ${style.insideBox}`}>
                                <Image loader={imageLoader} width={100}  height={100}className='rate_image ' src={blank_image}  alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p>Jeetpratap singh</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars d-flex">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12  cen'>
                                    <p>G11 is the best fantasy league prediction. I have won 5k. Thank you g11.</p>
                                </div>

                            </div>
                        </div>
                
               
              
                        <div className={` ${style.Customer_box}`}>
                          <div className={`${'col-12 d-flex justify-content-center '} ${style.insideBox}`}>
                                <Image     loading="lazy" decoding="async" data-nimg="1"  loader={imageLoader} width={100}  height={100}className='rate_image ' src={blank_image}  alt="G11-Fantasy Cricket Prediction for Today's Match" />
                            </div>
                            <div className='col-12 d-flex justify-content-center'>
                                <p> Anushka Patel</p>
                            </div>
                            <div className='col-12 d-flex justify-content-center' >
                                <div className="stars d-flex">
                                    <i className="fa fa-star">  <AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><AiFillStar /></i>
                                    <i className="fa fa-star"><BsStarHalf /></i>
                                </div>
                            </div>
                            <div className='row center left'>
                                <div className='col-12 cen'>
                                    <p>Very informative. I always used there prediction for my fantasy team. There prediction always accurate. Thank you g11 team</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </ScrollContainer>
        </div>
    )
}
