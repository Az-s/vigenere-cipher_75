import axiosApi from '../../axiosApi';

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';
export const DECODE_SUCCESS = 'DECODE_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const encodeRequestSuccsess = (encode) => ({ type: ENCODE_SUCCESS });
export const decodeRequestSuccsess = (decode) => ({ type: DECODE_SUCCESS });
export const requestFailure = (error) => ({ type: REQUEST_FAILURE });

export const sendEncode = (sendData , pass) => {
    return async dispatch => {
        try {
            if (pass === '') {
                alert('Please, Enter Password')
            } else {
                await axiosApi.post('encode', sendData);
                dispatch(encodeRequestSuccsess());
            }

        } catch (error) {
            dispatch(requestFailure(error));
            throw error;
        }
    }
};

export const sendDecode = (sendData, pass) => {
    return async dispatch => {
        try {
            if (pass === '') {
                alert('Please, Enter Password')
            } else {
                await axiosApi.post('decode', sendData);
                dispatch(decodeRequestSuccsess());
            }

        } catch (error) {
            dispatch(requestFailure(error));
            throw error;
        }
    }
};