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
            to="https://discord.gg/QM7dG78rNW">
            Sorry broken page route, click here to go to my discord
          </Link>
          </div>
        </Layout>
      );
}