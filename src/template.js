'use strict';

const URLs = {
  github: `https://github.com/bogas04/mukhwakh`,
  source: `http://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.pdf`,
  api: `/api`,
};
const head = ({ title = 'Mukhwakh' }) => `
<head>
  <title>${title}</title>
  <link rel="stylesheet" href="/node_modules/bootswatch/simplex/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="icon" type="image/png" href="/favicon.ico" />
  <meta charset="utf-8" />
</head>
`;

const footer = () => `
  <hr />
  <div class="container-fluid footer">
    <ul class="nav nav-pills">
      <li><a target="_blank" href="${URLs.github}">&copy; ${new Date().getFullYear()} Mukhwak</a></li>
      <li><a target="_blank" href="${URLs.api}">Developer</a></li>
      <li><a target="_blank" href="${URLs.github}/issues/new">Report Issue</a></li>
      <li><a target="_blank" href="${URLs.source}">Hukamnama Source</a></li>
    </ul>
  </div>
`;

module.exports = ({ data, error = false, err = {} }) => error
  ? (`
<!doctype>
<html>
  ${head({ title: 'Mukhwak - Error!' })}
  <body>
    <div class="container">
      <h1>Oops, we've some bad news!</h1>
      <div class="jumbotron">${ err === 404 ? `Page not found!` : JSON.stringify(err, null, 2)}</div>
    </div>
    ${footer()}
  </body>
</html>`)
          : (`
<!doctype>
<html>
  ${head({ title: `Mukhwak - ${data.ang}` })}
  <body>
    <div class="container">
      <h1> ☬ Aj Da Mukhwak <small>Ang ${data.ang}</small></h1>
        <h4>${data.date}</h4>
      <hr /> 
      <div class="jumbotron">
        <div class="huge-font gurakhr">${data.gurbani}</div>
      </div>
      <h3>Translations</h3>
      <div class="col-xl-6 huge-font gurakhr">${data.punjabi}</div>
      <div class="col-xl-6 huge-font">${data.english}</div>
    </div>
    ${footer()}
  </body>
</html> 
`);
