import { LinkPreview } from "react-link-previewer";
import "react-link-previewer/src/style.css";

export default function Link() {
  return (
    <LinkPreview
      external={false} // open external resource in the new tab. default: false
      href="https://www.google.com" // link you want to preview
      host="https://og-service.herokuapp.com" // optional custom link data fetching endpoint
      fetchOptions={{ mode: "no-cors", credentials: "include", method: "GET" }} // optional fetch paramaters for making the request
    />
  );
}
