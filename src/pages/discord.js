import React from "react";
import Layout from "@theme/Layout";
import Link from '@docusaurus/Link';
import BrowserOnly from "@docusaurus/BrowserOnly"

const url = "https://discord.gg/QM7dG78rNW"
const text = "Discord"

const Redirect = () => {
  return (
    <BrowserOnly>
      {() => <script>
        {window.location.assign(url)}
        </script>}
    </BrowserOnly>
  );
};

export default function permanentRedirect(){
  return (
    <Layout title="Hello" description="Hello React Page">
    <Redirect></Redirect>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          flexDirection:"column"
        }}>
        <h2>Redirecting... click below if it takes too long</h2>
        <Link
          className="button button--secondary button--lg"
          to={url}>
          {text}
        </Link>
      </div>
    </Layout>
  );
}