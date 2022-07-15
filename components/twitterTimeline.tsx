/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Button, Grid } from '@mui/material'


const TwitterTimeline=()=>{
  const timelineBox=css`
  font-family: 'Zen Maru Gothic', sans-serif;
  margin-top:2rem;
  background-color:rgba(210,210,240,0.6);
  padding:1rem;
  border-radius:15px;
  `

  return (
    <Box css={timelineBox}>
      <a className="twitter-timeline" data-width="450" data-height="700" href="https://twitter.com/AmenoAtsuta?ref_src=twsrc%5Etfw">Tweets by AmenoAtsuta</a> <script async src="https://platform.twitter.com/widgets.js"></script>
    </Box>
  )
}

export default TwitterTimeline;