import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import LayOutKonten from '../components/layoutKonten'

import { useQuery } from '@apollo/react-hooks';
import withApollo from '../libs/apolloData';
import { GET_USERS } from '../gql/users';
import { getDataFromTree } from '@apollo/react-ssr';

//import "../css/datePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import React, { useState } from "react";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  // render regular HTML input element
 

  return (
    <div suppressHydrationWarning={true}>
      { process.browser && 
      <DatePicker
      
      value={selectedDay}
      onChange={setSelectedDay}
      //renderInput={renderCustomInput} // render a custom input
      shouldHighlightWeekends
    />
      }
    
    </div>
  );
};

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
        <App/>
        <LayOutKonten type='home'>
          hi {data.users[0].name}
          ini adalah children dari file index
        </LayOutKonten>
      </section>
    </Layout>
  )
}

export default withApollo(Home,{getDataFromTree});


// referensi rendering in browser 
// https://haodong.io/render-client-side-only-component-in-next-js