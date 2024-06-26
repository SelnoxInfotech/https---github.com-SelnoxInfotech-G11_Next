
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { React, useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../Image/G11.webp"
import dekstoplogo from "../../Image/G11.png"
import style from "../../../src/styles/Style.module.scss"
import Image from 'next/image';
function OffcanvasExample({ props }) {
  // const [image, setimage] = useState([])
  const router = useRouter();
  const [Dropshow, setDropshow] = useState(false);
  const [show, setShow] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: 0,
    winHeight: 0,
  })


  const detectSize = () => {
    detectHW({
      winWidth: window?.innerWidth,
      winHeight: window?.innerHeight,
    })
  }
  useEffect(() => {
    detectSize()
    window?.addEventListener('resize', detectSize)
    return () => {
      window?.removeEventListener('resize', detectSize)
    }

  }, [])

  const toggleOffCanvas = () => {
    if (windowDimenion?.winWidth <= 991) {

      setShow((show) => !show);
    }
  }
  function hrefFunction() {
    // window()?.location?.href = "https://t.me/+TyYoHMGT3r1jMjM1";
  }
  function href() {
    router.push("/")
  }



  const showDropdown = (e) => {
    setDropshow(!Dropshow);
  }
  const hideDropdown = e => {
    setDropshow(false);
  }
  // const imageLoader = ({ src, width, quality }) => {
  //     console.log("true")
  //   return windowDimenion?.winWidth <= 991 && `/{src}?w=${width}&q=${quality || 75}`
  // }

  // useEffect(() => {
  //   async function hrefFunction() {
  //     const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
  //     const Imageprops = await Image.json()
  //     return setimage(Imageprops)
  //   }

  //   hrefFunction()
  // }, [])

  return (

    <div className='sticky-top'  >
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={style.Nav}

        >
          <Container fluid  >

            <Nav>
              <Image src={windowDimenion?.winWidth <= 991 ? logo : dekstoplogo} width={1000} height={84} onClick={href} className={style.logo_img} alt="Grand11.logo" /></Nav>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffCanvas}  ><GiHamburgerMenu color='#fff' size={32} /></Navbar.Toggle>
            <Navbar.Offcanvas

              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby="offcanvasNavbarLabel"
              placement='end'
              show={show}
              onHide={toggleOffCanvas}
            >
              <Offcanvas.Header closeButton className={style.Offcanvas}  >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                  {/* <div className='row'> */}
                  {/* <div className='col-12 lrftjoin' > */}
                  <button onClick={hrefFunction} type="button" className={`${style.btn_tele}  btn `}><Link href={'https://t.me/+TyYoHMGT3r1jMjM1'} className='text-white text-decoration-none'> Join Telegram </Link> </button>
                  {/* </div> */}
                  {/* </div> */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={style.Offcanvas}>
                <Nav className={`${style.Homelink} , offcanvas--menu`}>
                  <Link
                    onClick={toggleOffCanvas}
                    className="NavLink" href="/">Home</Link>
                  <Link
                    onClick={toggleOffCanvas}
                    href="/cricket-match-predictions">Match</Link>
                  <Link
                    onClick={toggleOffCanvas}
                    href="/cricket-breaking-news">Breaking News</Link>
                  <Link
                    onClick={toggleOffCanvas}
                    href="/icc-t20-world-cup-2024">ICC World Cup 2024</Link>
                  <Link
                    onClick={toggleOffCanvas}
                    href="/fantasy-cricket-tips">Fantasy Cricket Tips</Link >

                  <NavDropdown
                    id="nav-dropdown-example"
                    title="More"
                    className={style.dropdownLink}
                    show={Dropshow}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}

                  >

                    <div className={style.customnavdrpstyle}>
                      <Link href="/cricket-rules-and-regulation/" active style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ' }}> Cricket Rules and Regulation</Link>
                      <Link href="/icc-cricket-world-cup-2023" active style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ' }}>ICC World Cup 2023</Link>
                      <Link href="/cricket-players" active style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ' }}>  Cricket Players</Link>
                      <Link href="/ipl-2024-dream11-predictions" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', width: 'fit-content' }}>IPL 2024 Prediction</Link>
                      <Link href="/cricket-news" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', width: 'fit-content' }}>News</Link>
                      <Link href="/ipl_2023" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', width: 'fit-content' }}>IPL 2023</Link>
                      <Link href="/ipl-2024" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', width: 'fit-content' }}>IPL 2024</Link>
                      <Link href="/latest-video" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', width: 'fit-content' }}>Video</Link>
                      <Link href="/contact-us" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', width: 'fit-content' }}>Contact</Link>
                      <Link style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ' }} onClick={toggleOffCanvas} href="/about-us">About</Link >
                    </div>
                  </NavDropdown>
                </Nav>

                {!show && <button onClick={hrefFunction} type="button" className={`${style.btn_tele}  btn`}> <Link href={'https://t.me/+TyYoHMGT3r1jMjM1'} className='text-decoration-none text-white'> Join Telegram </Link> </button>}
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </div>

  );
}

export default OffcanvasExample;


