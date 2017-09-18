export default function({ dispatch }) {
    return next => action => {
        if (!action.payload.then) {
            return next(action);
        }

        action.payload.then(function(response) {
            const newAction = Object.assign(action, { payload: response });
            dispatch(newAction);
        });
    };
}
