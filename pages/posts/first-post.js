import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/Alert'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      How are you
      <Alert type='error'>
        <div>hello</div>
        
      </Alert>
      
    </Layout>
  )
}