import React from 'react'
import Link from 'next/link'
import style from "../../../styles/Style.module.scss"

export default function BraekingNewsSlider({ props }) {
  function modifystr(str) {
    str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str.trim().replaceAll(' ', "-");
    let a = 0;
    while (a < 1) {
        if (str.includes("--")) {
            str = str.replaceAll("--", "-")
        } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
        } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
        } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
        } else {
            a++
        }
    }

    return str
}

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className={`col-4 ${style.braking_news}`}>
            <p className="align-middle m-0 py-2">BREAKING NEWS</p>
          </div>
          <div className={`${style.scroll_container}  col`}>
            <span className={style.scroll_text}>
              <Link href={`/cricket-breaking-news/${modifystr(props[0]?.Title)}/${props[0]?.id}`} className={style.hovereffect} > {props[0]?.Title} </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}











// <div className="container-fluid">


//   <div className="row ">
//     <div className={`col-4 ${style.braking_news}`}>

//       <p className="align-middle">BREAKING NEWS</p>

//     </div>
//     <div className={`${style.scroll_container}  col`}>
//       <span className={style.scroll_text}>
//         {/* {data[0].Title}  */}

//         <Link href={`/cricket-breakingnews/${breakingnews[0]?.id}/${breakingnews[0]?.Title?.replace(/\s+/g, '-')}`} className={style.hovereffect} > {breakingnews[0]?.Title} </Link>
//       </span>
//     </div>


//   </div>



// </div>