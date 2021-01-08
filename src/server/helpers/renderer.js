import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../../client/Routes';
import serialize from 'serialize-javascript';

export default (req, store, context) => {
    // const content = '';
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const stateString = JSON.stringify(serialize(store.getState()));

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE=JSON.parse(${stateString});
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
