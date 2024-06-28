async function api(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = response.json();
        return json;
    } catch (error) {
      console.log(error);  
    }
}

export default api;