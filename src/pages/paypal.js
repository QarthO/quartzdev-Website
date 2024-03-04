import React from "react";
import Layout from "@theme/Layout";
import Link from '@docusaurus/Link';

export default function Test(){
    return (
        <Layout title="Hello" description="Hello React Page">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              fontSize: '20px',
            }}>

          <Link
            className="button button--secondary button--lg"
            to="https://www.paypal.com/donate/?hosted_button_id=MP5VDJYTS6RQJ">
            Sorry broken page route, click here to go to my paypal
          </Link>
          </div>
        </Layout>
      );
}