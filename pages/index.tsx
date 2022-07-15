/** @jsxImportSource @emotion/react */
import type { NextPage, GetStaticProps ,InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import YoutubeTile from '../components/youtubeTile';
import TwitterTimeline from '../components/twitterTimeline';
import { Box, Grid } from '@mui/material';
import { css } from '@emotion/react'
import { useEffect } from 'react';

type Props = InferGetStaticPropsType<typeof getStaticProps>

export async function getStaticProps(){
  console.log(process.env.YOUTUBE_CHANNEL_ID)
  const youtubeApiRes=await fetch("https://www.googleapis.com/youtube/v3/channels?part=" +
  "snippet" +
  "&id=" +
  process.env.YOUTUBE_CHANNEL_ID +
  "&key=" +
  process.env.YOUTUBE_API_KEY);
  const snippets=await youtubeApiRes.json();
  const youtubeApiResStat=await fetch("https://www.googleapis.com/youtube/v3/channels?part=" +
  "statistics" +
  "&id=" +
  process.env.YOUTUBE_CHANNEL_ID +
  "&key=" +
  process.env.YOUTUBE_API_KEY);
  
  const statistics=await youtubeApiResStat.json();
  return {props:{snippets,statistics},revalidate:60};
};

let isLoadwidgets = false;
export const Twemb = () => {
  useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
}

const Home: NextPage<Props> = ({snippets, statistics}) => {

  const intro=css`
    font-family: 'Zen Maru Gothic', sans-serif;
    margin-top:8rem;
    background-color:rgba(230,230,230,0.6);
    height:fit-content;
    padding:1rem;
    border-radius:15px;
  `

  const title=css`
    font-size:4rem;
  `

  const introP=css`
    font-size:2rem;
  `

  const LeftWrapper:React.FC=()=>{
    return (
      <Grid container>
        <Grid item columns={{xs:12}} css={intro}>
          <h1 css={title}>熱田アメノ公式ホームページ</h1>
          <p css={introP}>
            カチャカチャ名古屋系新人バ美肉Vtuberの熱田アメノです<br/>
            WarThunderやポーカーチェイスなどのゲーム配信をメインにYoutubeで活動しています<br/>
            技術系ボイチェン勢です<br/>
            もっとカワイイ声を！
          </p>
        </Grid>
        <Grid item xs={6}>
        <YoutubeTile
          snippets={snippets}
          statistics={statistics}
        />
        </Grid>
        <Grid item xs={6}>
          <TwitterTimeline/>
        </Grid>
      </Grid>
    )
  }

  return (
    <Layout
      title="熱田アメノ公式ホームページ"
      description="バーチャル名古屋在住、新人バ美肉Vtuber熱田アメノの公式ホームページです。"
    >
      <Box sx={{display:"grid", gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <Box
          sx={{zindex:"fab"}}
        >
          <Image
            src="/../public/ameno.png"
            alt="ameno"
            width="800"
            height="1700"
          />
        </Box>
        <LeftWrapper/>
      </Box>
    </Layout>
  )
}

export default Home