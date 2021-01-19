import {
    userRequestThunk,
    fetchUserStart,
    fetchUserSuccess,
    userDefault } from '../store/actions';

global.fetch = jest.fn();
const dispatch = jest.fn();

describe('userRequestThunk', () => {
    it('dispatches a request start action', async () => {
        await userRequestThunk('test')(dispatch);
        expect(dispatch).toHaveBeenCalledWith(fetchUserStart());
    })

    it('on success dispatches a success action with data', async () => {
        fetch.mockResolvedValueOnce({ json: () => Promise.resolve(userDefault) });
        await userRequestThunk('test')(dispatch);
        expect(dispatch).toHaveBeenLastCalledWith(fetchUserSuccess());
    })
})
