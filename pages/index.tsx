/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import { Box } from '@mui/material';
import { css } from '@emotion/react'

const Home: NextPage = () => {

  const LeftWrapper:React.FC=()=>{
    return (
      <Box>
        <h1>熱田アメノ公式ホームページ</h1>
        <p>
          カチャカチャ名古屋系新人バ美肉Vtuberの熱田アメノです<br/>
          WarThunderやポーカーチェイスなどのゲーム配信をメインにYoutubeで活動しています<br/>
          技術系ボイチェン勢です<br/>
          もっとカワイイ声を！
        </p>
      </Box>
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