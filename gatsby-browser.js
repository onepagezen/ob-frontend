/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Bulma Framework global scss
import "./src/styles/mystyles.scss"

// Anchorate package for in-page anchors
import { anchorate } from 'anchorate';

// Apollo client
export { wrapRootElement } from './src/apollo/wrap-root-element';

// Call anchorate() on onRouteUpdate function
export const onRouteUpdate = () => {
  anchorate()
}
