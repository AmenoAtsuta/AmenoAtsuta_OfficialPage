import type { NextPage } from 'next'
import Layout from '../components/layout'
import { Button } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Layout
      title="熱田アメノ公式ホームページ"
      description="バーチャル名古屋在住、新人バ美肉Vtuber熱田アメノの公式ホームページです。"
    >
      <Button variant="contained">Hello World</Button>
    </Layout>
  )
}

export default Home