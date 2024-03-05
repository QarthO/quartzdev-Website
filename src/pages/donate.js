import React from "react";
import Layout from "@theme/Layout";
import Link from '@docusaurus/Link';
import BrowserOnly from "@docusaurus/BrowserOnly"

const url = "https://www.paypal.com/donate/?hosted_button_id=MP5VDJYTS6RQJ"

const Redirect = () => {
  return (
    <BrowserOnly>
      {() => <script>
        {window.location.assign("https://www.paypal.com/donate/?hosted_button_id=MP5VDJYTS6RQJ")}
        </script>}
    </BrowserOnly>
  );
};


export default function permanentRedirect(){
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
      <Redirect></Redirect>
      <Link
        className="button button--secondary button--lg"
        to="https://discord.gg/QM7dG78rNW">
        Redirecting... If it fails, click here
      </Link>
      </div>
    </Layout>
  );
}