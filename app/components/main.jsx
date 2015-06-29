import imgReact from './images/reactjs.png';
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <img src={imgReact}/>
                <h2>React starter project</h2>
            </div>
        );
    }
}
