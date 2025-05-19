const path = require("path");
const outDir = "./public/icons";

const iconTemplate = (variables, { tpl }) => tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
 
${variables.exports};
`;
