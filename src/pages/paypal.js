import BrowserOnly from "@docusaurus/BrowserOnly"

const url = "https://www.paypal.com/donate/?hosted_button_id=MP5VDJYTS6RQJ"

export default function permanentRedirect(){
  <BrowserOnly>
    <script>
      {/* {window.location.assign(url)} */}
    </script>
  </BrowserOnly>
}