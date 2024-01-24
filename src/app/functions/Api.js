import { logoutUser } from '../../deconnection';
class Api {
  static async fetch(url, method = 'GET', headers = {}) {
    try {
      const token = localStorage.setItem(
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6MTAsImlkVXRpbGlzYXRldXIiOjEsIm5vbVByZW5vbSI6Ik1yICBBZG1pbiIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDYwNDc4MDYsImV4cCI6MTcwNjA0OTYwNn0.INPb76FxhzhHxRJ48xJxQPlo_ymyB6XCM92NYpm3cP74uOUi1BbGDN3gZUmqt0fdxB6-BhWGBVPAOJd8oSMugA'
      );

      if (token == null) {
        window.location.href = '/session/signin';
      }

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: 'Bearer ' + token,
          ...headers
        }
      });

      const content = await response.json();
      alert(content);
      if (content.status_code === '401') {
        const logoutResult = await logoutUser();
        if (logoutResult.success) {
          window.location.href = '/session/signin';
        } else {
          console.error('Échec de la déconnexion:', logoutResult.message);
          alert(logoutResult.message);
        }
      }
      return content;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des données: ${error.message}`);
    }
  }
}

export default Api;
