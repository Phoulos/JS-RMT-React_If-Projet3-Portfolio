import http from "./http"

export default class ProjetService {

    static all = async () => {
        return await http.get('/api/projets');
    }

}