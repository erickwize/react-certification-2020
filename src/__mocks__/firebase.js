const authStateResponse = { email: 'wizeline@wizeline.com', emailVerified: false };

const mockSignInWithEmailAndPassword = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline@wizeline.com' && password === 'Rocks!') {
        return resolve(authStateResponse);
      }
      return reject(new Error('Username or password invalid'));
    }, 100);
  });
};

const mockFirebase = {
  auth: jest.fn(() => mockFirebase),
  onAuthStateChanged: jest.fn(() => Promise.resolve(authStateResponse)),
  signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
  signOut: jest.fn(() => Promise.resolve(false)),
};

export const auth = mockFirebase;
