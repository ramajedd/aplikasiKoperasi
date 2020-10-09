import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import LayOutKonten from '../components/layoutKonten'

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
      <section >
        <LayOutKonten type='home'>
          hi {data.users[0].name}
          ini adalah children dari file index
        </LayOutKonten>
      </section>
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home);