const config = {
  baseURL: "https://example.com/api",
  headers: {
    "Content-Type": "application/json"
  }
};

class User {
  // Handle login
  static Login(data) {
    console.log({ config });
  }
  // Handle logout
  static Logout(data) {
    console.log({ config });
  }
  // Dashboard
  static Dashboard(params = {}) {
    console.log({ config });
  }
}

export default {
  User
};
