import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('../Component/card/index'), { ssr: true, loading: () => <p>Loading...</p> });
import  Seo from '../Component/Seo/Seo';
import useSWR from 'swr';
import Cardskeleton from '../Component/skeleton/cardskeleton'
import style from "../styles/Style.module.scss"
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Icc_cricket_world_cup_2023 = ({ initialData }) => {

  const k = initialData
  const { data: fetchedData, error } = useSWR(`/FilterbySubCategory/${2}`, fetcher, { k });

  const data = fetchedData;

  if (!data) {
    return (
      <div className='container '>
        <div className={style.Breaking_new}>
          <div className={style.Breaking_newCardWrapper}>
            {
              [1, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                return < Cardskeleton key={i} />
              })
            }
          </div>
        </div>

      </div>
    )
  }
  return (
    <>
      <Seo
        Breadcrumlist={[{Home:"https://g11prediction.com/" } , {News: "/icc-cricket-world-cup-2023/"}]}
        image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
        title={"Breaking News | G11 Fantasy Cricket Prediction |"}
        description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
        keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
        canonical={"https://g11prediction.com/icc-cricket-world-cup-2023/"}
    ></Seo>
      <Card slug={"Icc-Cricket-World-Cup-2023"} props={data} heading={<h1>icc cricket world cup 2023</h1>} query={"icc-cricket-world-cup-2023"} data1={null}></Card>
    </>
  );
};

export default Icc_cricket_world_cup_2023;



export async function getStaticProps(ctx) {
  try {
    const [topNewsRes] = await Promise.all([
      fetch(`https://g11fantasy.com/NewsSection/FilterbySubCategory/${2}`),
    ]);

    const [topNews] = await Promise.all([
      topNewsRes.json(),
    ]);


    const responseData = {
      breaking: topNews.data,
    };
    return {
      props: {
        initialData: responseData.breaking,
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

