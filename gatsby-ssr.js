/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require(`react`);
exports.onRenderBody = (
    { setHeadComponents }
) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
            var clicky_site_ids = clicky_site_ids || [101198004];
            clicky_site_ids.push(101198004);
          `,
      }}
    />,
    <script
      async
      type="text/javascript"
      src="//static.getclicky.com/js"
    />,
  ])
}