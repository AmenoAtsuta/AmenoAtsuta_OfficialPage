import Head from 'next/head'
import Link from 'next/link'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || ''
    return (
        <div className="wrap">
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description || '' } />
            </Head>
            <main>{ children }</main>
        </div>
    )
}