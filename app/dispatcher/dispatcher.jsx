import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    handleActionView(action) {
        this.dispatch({
            source: 'ACTION_VIEW',
            action: action
        });
    }
    handleActionServer(action) {
        this.dispatch({
            source: 'ACTION_SERVER',
            action: action
        });
    }
}

let _AppDispatcher = new AppDispatcher();
export default _AppDispatcher;
