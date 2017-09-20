import * as actions from './constants';
import gardensApi from '../services/gardensApi';

export const makeSaveGarden = gardensApi => garden => dispatch => {
    dispatch({ type: actions.SAVING_GARDEN });
    return gardensApi.update(garden)
        .then(saved => {
            dispatch({
                type: actions.SAVED_GARDEN,
                payload: saved
            });
        },
        error => {
            dispatch({
                type: actions.SAVE_GARDEN_ERROR,
                payload: error
            });
        });
};
export const saveGarden = makeSaveGarden(gardensApi);

export const makeDeleteGarden = gardensApi => garden => dispatch => {
    dispatch({ type: actions.DELETING_GARDEN });
    return gardensApi.delete(garden)
        .then(() => {
            dispatch({
                type: actions.DELETED_GARDEN
            });
        },
        error => {
            dispatch({
                type: actions.DELETE_GARDEN_ERROR,
                payload: error
            });
        });
};
export const deleteGarden = makeDeleteGarden(gardensApi);