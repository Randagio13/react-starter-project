import routes from './routes/routes.jsx';
ReactRouter.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});
