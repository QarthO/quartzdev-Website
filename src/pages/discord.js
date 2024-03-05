import BrowserOnly from "@docusaurus/BrowserOnly"

const url = "https://discord.gg/QM7dG78rNW"

export default function permanentRedirect(){
  <BrowserOnly>
    <script>
      {window.location.assign(url)}
    </script>
  </BrowserOnly>
}