/* eslint-disable */
import React from "react";
import HtmlHead from "./components/partials/htmlHead";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
//AdPlugg Snippet//   
        <script>
    (function(ac) {
      var d = document, s = 'script', id = 'adplugg-adjs';
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id; js.async = 1;
      js.src = '//www.adplugg.com/serve/' + ac + '/js/1.1/ad.js';
      fjs.parentNode.insertBefore(js, fjs);
    }('A48220554'));
</script>
//End AdPlugg Snippet//
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <HtmlHead />
          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
