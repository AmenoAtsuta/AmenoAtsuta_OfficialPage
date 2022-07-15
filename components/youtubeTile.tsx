/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { css } from '@emotion/react'
import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'

const YoutubeTile:React.FC<any>=(snippets, statistics)=>{
  const tile=css`
    font-family: 'Zen Maru Gothic', sans-serif;
    margin-top:2rem;
    background-color:rgba(210,210,240,0.6);
    padding:1rem;
    border-radius:15px;
  `
  const chIcon=css`
    border-radius:50%;
    vertical-align: middle;
    display: inline-block;
    margin-right:5%;
  `

  const chTitle=css`
    display: inline-block;
    font-size:2rem;
    vertical-align:bottom;
  `

  const subscribers=css`
    margin:2% auto;
    text-align:center;
  `
  const subscribeButton=css`
    margin-right:auto;
    margin-left:auto;
    text-align:center;
  `

  return (
    <Box css={tile}>
      <Image width="100" height="100" css={chIcon} alt="チャンネルアイコン" src={snippets.snippets.items[0]&&snippets.snippets.items[0].snippet.thumbnails.default.url} />
      <h2 css={chTitle}>{snippets.snippets.items[0]&&snippets.snippets.items[0].snippet.title}</h2><br/>
      <p>{snippets.snippets.items[0]&&snippets.snippets.items[0].snippet.description}</p>
      <h3 css={subscribers}>現在のチャンネル登録者:{snippets.snippets.items[0]&&snippets.statistics.items[0].statistics.subscriberCount}人<br/>登録してね！</h3>
      <Grid container direction="column" alignItems="center">
        <Grid item>
        <Button css={subscribeButton} variant="contained" href="https://www.youtube.com/channel/UCcNBKvsZBMPMJTwNaraELHg?sub_confirmation=1">チャンネル登録</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default YoutubeTile;