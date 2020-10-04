import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../gql/users';

const Home = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi {data.users[0].name}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <Link href="/posts/first-post">
              <a>first post</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home);