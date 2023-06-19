class ApiService {

    baseUrl = 'http://localhost:4000/api/actionPlans';


    async fetchData(endpoint: string) {
        try {
          const response = await fetch(`${this.baseUrl}/${endpoint}`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
    }

    async postData(endpoint: string, body: any) {

        console.log(JSON.stringify(body));
        try {
          const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error posting data:', error);
          throw error;
        }
    }

    async guardarActionPlanDetails(data: any) {

        try {
          const response = await this.postData('agregarConDetalle', data);
            return response;
          // Maneja la respuesta de la solicitud POST aquí
        } catch (error) {
            return error;
          console.error(error);
          // Maneja el error de la solicitud POST aquí
        }

    }

    





}
export {} // Declaración de exportación vacía para convertir el archivo en un módulo

export default ApiService;