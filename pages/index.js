import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Card from '../components/card'
//import utilStyles from '../styles/utils.module.css'

import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../gql/users';

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <Layout beranda>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >


        <Card
            data={`Hi ${data.users[0].name}`}
            deskripsi={"This is a sample website - you’ll be building a site like this on our tutorial"}
        />
  
          
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <Link href="/posts/first-post">
            <a>first post</a>
          </Link>
        

      </section>
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home);