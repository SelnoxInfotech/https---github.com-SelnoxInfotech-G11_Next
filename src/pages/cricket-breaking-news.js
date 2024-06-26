// import React from 'react';
// import Head from 'next/head';
// import dynamic from 'next/dynamic'
// const Card = dynamic(() => import('../Component/card/index'), { ssr: false, loading: () => <p>Loading...</p> });
// import { Seo } from '../Component/Seo/Seo';
// import useSWR from 'swr';
//   import { useRouter } from 'next/router'
// const fetcher = async (url) => {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

// const Breakingnews = ({ initialData }) => {
//   // console.log(FilterbyidNews())
//   const router = useRouter()
//   const { data: fetchedData, error } = useSWR('/api/utils/breakingnew', fetcher, { initialData });
// if(router.asPath === "/breaking-news/" || router.asPath === "/BreakingNews/"){
//   window.history.replaceState({}, '', `/cricket-breaking-news`);
// }

//   const data = fetchedData?.breaking || initialData?.breaking;
//   // if (error) return <div>Error loading data</div>;
//   if (!data) return <div>Loading...</div>;
//   console.log(fetchedData?.breaking)
//   return (
//     <>
//       <Seo
//         image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
//         title="Breaking News | G11 Fantasy Cricket Prediction |"
//         description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
//         keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
//         canonical={"https://g11prediction.com/breaking-news/"}
//       ></Seo>
//       <Card props={data}  heading={<h1>cricket breaking news</h1>}query={"cricket-breaking-news"}></Card>
//     </>
//   );
// };

// export default Breakingnews;




// export async function getServerSideProps() {
//   try {
//     const [topNewsRes] = await Promise.all([
//       fetch('https://www.g11fantasy.com/NewsSection/Get-News/1'),
//     ]);

//     const [topNews] = await Promise.all([
//       topNewsRes.json(),
//     ]);


//     const responseData = {
//       breaking: topNews,
//     };
//     return {
//       props: {
//         initialData: responseData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         initialData: null,
//         error: 'Failed to fetch data',
//       },
//     };
//   }
// }

import useSWR from 'swr';
import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '../Component/Seo/Seo';
import { useRouter } from 'next/router';
const Card = dynamic(() => import('../Component/card/index'), { ssr: true });
import Cardskeleton from '../Component/skeleton/cardskeleton'
import style from "../styles/Style.module.scss"
import axios from 'axios';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};



const Breakingnews = (props) => {

  const [propsdata, setPropsData] = React.useState(props?.initialData?.breaking || [])
  const [dataLoad , setdataLoading]  = React.useState(false)
  const router = useRouter();
  React.useEffect(() => {
    router.push({ pathname: '/cricket-breaking-news/' });
  }, [])


  function loadmorefun() {
    setdataLoading(()=>true)
    axios.get(`https://g11fantasy.com/NewsSection/Get-NewsBySubCategoryNewApi/?limit=${propsdata.length + 10}&offset=0&subcategory=5`)
      .then((data) => {
        setPropsData(prevPropsData => data.data);
        setdataLoading(()=>false)
      }).catch(error => console.log(error));
  }


  //  console.log()
  if (!props.initialData.breaking) {
    return (
      <div className='container '>
        <div className={style.Breaking_new}>
          <div className={style.Breaking_newCardWrapper}>
            {
              [1, 6, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                return < Cardskeleton key={i} />
              })
            }
          </div>
        </div>

      </div>
    )
  }

  else {
    return (
      <React.Fragment>
        <Seo
          Breadcrumlist={[{ Home: "https://g11prediction.com/" }, { News: "/cricket-breaking-news/" }]}
          image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
          title="Breaking News | G11 Fantasy Cricket Prediction |"
          description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
          keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
          canonical={"https://g11prediction.com/cricket-breaking-news/"}
        />
        <div className='container' style={{minHeight:"680px"}}>
          <Card dataLoad={dataLoad} fun={loadmorefun} slug={"Cricket Breaking News"} props={propsdata} heading={<h1>Cricket breaking news</h1>} query={"cricket-breaking-news"} data1={''} />
        </div>
      </React.Fragment>
    );
  }
};

export default Breakingnews;

// export async function getStaticProps() {
//   try {
//     const topNewsRes = await fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/5');
//     const topNews = await topNewsRes.json();
//     return {
//       props: {
//         breakingData: topNews,
//       },
//       // revalidate: 60, // Revalidate every hour (in seconds)
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         breakingData: null,
//         error: 'Failed to fetch data',
//       },
//       // revalidate: 60 * 5, // Revalidate every 5 minutes if an error occurs
//     };
//   }
// }

// https://g11fantasy.com/NewsSection/Get-NewsBySubCategoryNewApi/?limit=10&offset=0&subcategory=1

export async function getServerSideProps() {
  try {
    const [topNewsRes] = await Promise.all([
      fetch('https://g11fantasy.com/NewsSection/Get-NewsBySubCategoryNewApi/?limit=10&offset=0&subcategory=5'),
    ]);

    const [topNews] = await Promise.all([
      topNewsRes.json(),
    ]);


    const responseData = {
      breaking: topNews,
    };
    return {
      props: {
        initialData: responseData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: null,
        error: 'Failed to fetch data',
      },
    };
  }
}
