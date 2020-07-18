import '../css/tailwind.css';
import '../css/tailwind.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter.inter.css" />
                <script
                    async
                    defer
                    src="https://buttons.github.io/buttons.js"
                ></script>
            </Head>

            <Component {...pageProps} />
        </>
    );
}
