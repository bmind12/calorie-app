import api from '../api';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await api.get(`/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Welcome to server!' });
  });
});
