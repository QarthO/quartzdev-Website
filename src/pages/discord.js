import BrowserOnly from "@docusaurus/BrowserOnly"

const url = "https://discord.gg/QM7dG78rNW"

const Redirect = () => {
  return (
    <BrowserOnly>
      {() => <script>
        {window.location.assign("https://discord.gg/QM7dG78rNW")}
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