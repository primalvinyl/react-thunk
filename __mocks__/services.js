const services = {
    getRequest: jest.fn(() => {
        Promise.resolve({
            json: () => Promise.resolve({ result: { name: 'dingo' } }),
        });
    })
}
export default services;
