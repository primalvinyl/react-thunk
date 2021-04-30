import {
    userRequest,
    fetchUserStart,
    fetchUserSuccess,
    userDefault } from '../store/actions';

global.fetch = jest.fn();
const dispatch = jest.fn();

describe('userRequest', () => {
    it('dispatches a request start action', async () => {
        await userRequest('test')(dispatch);
        expect(dispatch).toHaveBeenCalledWith(fetchUserStart());
    })

    it('on success dispatches a success action with data', async () => {
        fetch.mockResolvedValueOnce({ json: () => Promise.resolve(userDefault) });
        await userRequest('test')(dispatch);
        expect(dispatch).toHaveBeenLastCalledWith(fetchUserSuccess());
    })
})
