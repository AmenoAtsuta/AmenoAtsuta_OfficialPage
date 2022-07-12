/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import bg from "./../public/ebi2-.png"
import Header from "./header"


type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || ''
    const styles={
            backGround:css`
                background-image:url(${bg.src});
                background-size:cover;`
        }

    return (
        <div className="wrap" css={styles.backGround}>
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description || '' } />
            </Head>
            <Header/>
            <main>{ children }</main>
        </div>
    )
}