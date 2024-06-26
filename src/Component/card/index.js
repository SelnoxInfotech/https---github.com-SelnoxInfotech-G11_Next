"use client"
import React from 'react';
import style from "../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai"
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router'
import axios from 'axios';

const Card = ({ basecorme, props, query, data1, heading, domain, slug, fun  , dataLoad}) => {
    const router = useRouter()
    const [data, setdata] = React.useState(() => props)
    const imagePerRow = 10
    const [next, setNext] = React.useState(imagePerRow);
    function modifystr(str) {

        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str?.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str?.includes("--")) {
                str = str?.replaceAll("--", "-")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("//", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("-/", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str?.toLowerCase()
    }
    const imageLoader = ({ src, width, height, quality }) => {
        const l = domain !== undefined ? domain : "https://www.g11fantasy.com"
        return (`${l}${src}?w=${width}&h=${height}&q=${quality || 100}`)
    }
    const handleMoreImage = () => {
        fun()
        setNext(next + imagePerRow);

    };

    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    React.useEffect(() => {
        if (data1 === undefined) {
            axios.get('https://www.g11fantasy.com/NewsSection/Get-TopNews/1')
                .then(response => {
                    setdata(response.data)
                })
        }
        else if (data1 === "cricket-news") {
            axios.get(`https://grand11.in/g11/api/post`).then((res) => {
                setdata(res.data.result)
            })
        }
        else if (data1 === "icc-cricket-world-cup-2024") {
            axios.get(`/FilterbySubCategory/${8}`).then((response) => {
                setdata(response.data)
            })
        }

        else if (data1 === "IPL-2024-Latest-News-Live-Updates") {
            axios.get(`/FilterbySubCategory/${7}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "cricket-breaking-news") {
            axios.get(`https://www.g11fantasy.com/NewsSection/Get-TopNews/1`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "ipl-2023") {
            axios.get(`/FilterbySubCategory/${1}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "ipl-2024") {
            axios.get(`/FilterbySubCategory/${7}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "cricket-rules-and-regulation") {
            axios.get(`/Filterbycategory/${2}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "cricket-players") {
            axios.get(`/Filterbycategory/${3}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "ipl-2024-dream11-predictions") {
            axios.get(`/FilterbySubCategory/${11}`).then((response) => {
                setdata(response.data)
            })
        }
    }, [data1])
    React.useEffect(() => {
        setdata(props)
    }, [props])



    return (
        <div className='container center'>

            <div className={`${"row"} ${style.Breaking_new}`}>
                <div className={`col-12 ${style.breaking_news_hed}`}>
                    {heading}
                </div>
                {!basecorme && <p style={{ color: "#c2121c", display: "flex", gap: "15px" }}><span style={{ cursor: "pointer" }} onClick={() => router.push("/")}>Home</span>{">"}<span>{slug}</span></p>}
                <div className={style.Breaking_newCardWrapper}>
                    {
                        data?.slice(0, next)?.map((breakingnews, index) => {
                            // console.log(breakingnews?.urlslug !== (null || undefined) ? modifystr(breakingnews?.urlslug) : modifystr(breakingnews?.Title ||  breakingnews?.title))
                            return (

                                <div className={`${style.Breaking_news_gap}`} key={index}>
                                    <div className={style.BreakingNewscard}>

                                        <div className={`${"col"}`}>
                                            <RWebShare
                                                data={{}}
                                                onClick={() => console.log("shared successfully!")}
                                            >
                                                <Button className={`${style.ShareButton}`}>
                                                    <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                                </Button>
                                            </RWebShare>

                                        </div>
                                        {/* {
                                                console.log(breakingnews , breakingnews?.urlslug !== (null || undefined) , Boolean(breakingnews?.urlslug))
                                            } */}
                                        <Link className={`${style.hovereffect}`} href={`/${query}/${Boolean(breakingnews?.urlslug) ? modifystr(breakingnews?.urlslug) : modifystr(breakingnews?.Title || breakingnews?.title)}/${breakingnews.id}`} >
                                            <div className={style.News_image}>
                                                <div className={style.imghovereffect}></div>
                                                <Image className={style.NewsImage} loader={imageLoader} src={`${breakingnews?.Image || breakingnews?.image}`} height={10} width={100} alt="news_image" quality={100} />
                                            </div>
                                            <div className={style.News_image_title}>
                                                <h2 className={`card-text  ${style.card_text}`}>{breakingnews?.Title?.slice(0, 80) || breakingnews?.title}</h2>
                                            </div>
                                        </Link>
                                        <div className={`col-12 ${style.viewCount}`}>
                                            <div className={`col-md-6 col-4 ${style.viewCounteye}`}>
                                                <span>{breakingnews?.ViewCount}</span><AiFillEye></AiFillEye>
                                            </div>
                                            <div className={`col-md-6 col-8 text-end ${style.ViewCountDate}`}>
                                                <p >{breakingnews?.created?.slice(0, 10) || breakingnews?.post_date?.slice(0, 10)}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className={`${'row'} ${style.BreakingButton}`}>
                    {dataLoad ?
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div> :
                        <div className='col-12 d-flex gap-2 justify-content-center' id='Buttongap'>
                            {next <= data?.length && (
                                <button className={style.loadmorebtm} onClick={handleMoreImage}
                                >
                                    Load more
                                </button>
                            )}
                            {next < data?.length && (
                                <button className={next <= 10 ? 'hidden' : style.loadmorebtm} onClick={handlelessImage}
                                >
                                    Read Less
                                </button>
                            )}
                        </div>}

                </div>



            </div>

        </div>
    )
}



export default Card


