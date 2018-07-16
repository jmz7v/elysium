// Libraries
import axios from 'axios'

const config = {
  baseURL: 'https://example.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

class User {
  // Handle login
  static Login (data) {}
  // Handle logout
  static Logout (data) {}
  // Dashboard
  static Dashboard (params = {}) {}
}

export default {
  User
}
