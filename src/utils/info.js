module.exports = {
    validateData: (data) => {
        if(!data.title || !data.title.length || data.title > 52) {
            return {
                error: "Titulo inválido"
            }
        }

        if(!data.description || !data.description.length || data.description > 252) {
            return {
                error: "Descrição inválido"
            }
        }

        return true;
    },
    replaceBase64: (path) => {
        return path.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    },
    getMiMeTypeBase64: (base64) => {
        return base64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
    },
    containsURL: (string) => {
        if(string !== null) {
            if(string.indexOf('https://') != -1 || string.indexOf('http://') != -1 || string.indexOf('.com') != -1) {
                return true;
            }
        }

        return false;
    }
}