const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const get = require('lodash.get');
const remark = require('remark');
const remarkHTMl = require('remark-html');

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  fmImagesToRelative(node);

  const tagline = get(node, 'frontmatter.tagline');

  if (tagline) {
    const value = remark().use(remarkHTMl).processSync(tagline).toString();

    createNodeField({
      name: 'taglineHtml',
      node,
      value,
    });
  }
};
