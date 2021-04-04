const axios = require('axios');
const Rocket = require('./mock-module');

jest.mock('axios'); // !MOCKING 3rd Party Module- AXIOS

it('should fetch rockets', () => {
  const fakeRocketList = [
    {
      name: 'GSLV-Mk III - M1 / Chandrayaan-2 Mission',
      launchDate: 'Jul 22, 2019',
      launchType: 'GSLV-MK-III',
      payload: '',
    },
    {
      name: 'PSLV-C46 Mission',
      launchDate: 'May 22, 2019',
      launchType: 'PSLV-CA',
      payload: 'RISAT-2B',
    },
  ];

  const mockedResp = {
    data: {
      launcheList: fakeRocketList,
    },
  };

  axios.get.mockResolvedValue(mockedResp);

  // !or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(mockedResp))

  return Rocket.getAllRockets().then((data) =>
    expect(data).toEqual(fakeRocketList)
  );
});

it('Should Error out while error', () => {
  mockedError = `Error Occured while fetching the rockets`;
  axios.get.mockRejectedValue(mockedError);

  return (
    Rocket.getAllRockets()
      // .then()
      .catch((err) => expect(err).toEqual(mockedError))
  );
});

// ! Super-sexy way of async-await with promises

it('Another way of Happy Test for Rocket List', async () => {
  const fakeRocketList = [
    {
      name: 'PSLV-C46 Mission',
      launchDate: 'May 22, 2019',
      launchType: 'PSLV-CA',
      payload: 'RISAT-2B',
    },
  ];

  const mockedResp = {
    data: {
      launcheList: fakeRocketList,
    },
  };

  axios.get.mockResolvedValue(mockedResp);
  await expect(Rocket.getAllRockets()).resolves.toEqual(fakeRocketList);
});

it('Happy : Test for transformRockets', () => {
  const fakeRocketList = [
    {
      name: 'PSLV-C46 Mission',
      launchDate: 'May 22, 2019',
      launchType: 'PSLV-CA',
      payload: 'RISAT-2B',
    },
  ];

  const mockedResp = {
    data: {
      launcheList: fakeRocketList,
    },
  };

  const expectedTransformedVal = [
    {
      name: 'India PSLV-C46 Mission',
    },
  ];

  const expectedFalseTransformedVal = [
    {
      name: 'PSLV-C46 Mission',
    },
  ];

  // ! Instead of calling actual getAllRockets() fun, you are spyedOn it to create a mocked version of it
  // ! In this test getAllRockets() --called--> mockGetAllRockets() <Faked/Mock Version>
  const mockGetAllRockets = jest.spyOn(Rocket, 'getAllRockets');
  // mockGetAllRockets.mockReturnValue(mockedResp); // ! I cannot use mockReturnValue, bcoz - getAllRockets() return Promise
  mockGetAllRockets.mockImplementationOnce(() => Promise.resolve(mockedResp));

  expect(mockGetAllRockets).toHaveBeenCalledTimes(0);
  const rocket = new Rocket();
  rocket.transformRockets();
  // ! parent func (transformRockets) called onces, which internal calls mock (mockGetAllRockets) implementation of getAllRockets
  expect(mockGetAllRockets).toHaveBeenCalledTimes(1);

  expect(rocket.transformRockets()).resolves.toEqual(expectedTransformedVal);
  expect(mockGetAllRockets).toHaveBeenCalledTimes(2);

  expect(rocket.transformRockets()).resolves.not.toEqual(
    expectedFalseTransformedVal
  );
  expect(mockGetAllRockets).toHaveBeenCalledTimes(3);

  mockGetAllRockets.mockRestore();
});

it('Example for mockImplementationOnce() ', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

  // console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn()); // ! 'first call', 'second call', 'default', 'default'
});

it('Mock Return this', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };

  // is the same as ->

  const otherObj = {
    myMethod: jest.fn(function () {
      return this;
    }),
  };
});

it('Alias Name of Mock Function', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue(true)
    .mockImplementation((scalar) => 42 + scalar)
    .mockName('add42');
});

it('Custom Matchers for Mock Functions', () => {
  const fakeRocketList = [
    {
      name: 'PSLV-C46 Mission',
      launchDate: 'May 22, 2019',
      launchType: 'PSLV-CA',
      payload: 'RISAT-2B',
    },
  ];

  const mockedResp = {
    data: {
      launcheList: fakeRocketList,
    },
  };

  const mockGetAllRockets = jest.spyOn(Rocket, 'getAllRockets');
  mockGetAllRockets.mockImplementationOnce(() => Promise.resolve(mockedResp));
  mockGetAllRockets.mockName('mockedGetAllRockets'); // ! Giving Alias name for mock fun

  expect(mockGetAllRockets).toHaveBeenCalledTimes(0);
  const rocket = new Rocket();
  rocket.transformRockets();
  expect(mockGetAllRockets).toHaveBeenCalledTimes(1);

  expect(mockGetAllRockets).toHaveBeenCalled(); // !mock function was called at least once
  expect(mockGetAllRockets).toHaveBeenCalledWith(); //! mock function called with 0 arguments
  expect(mockGetAllRockets).toHaveBeenLastCalledWith();

  expect(mockGetAllRockets.mock.calls.length).toBeGreaterThan(0);
  expect(mockGetAllRockets.mock.calls.length).not.toBeGreaterThan(1);

  expect(mockGetAllRockets.mock.calls).toContainEqual([]); // !since no argument so empty array

  expect(mockGetAllRockets.getMockName()).toBe('mockedGetAllRockets');
});
