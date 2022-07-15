

export class Http {

    public static async Post(url: string, req: any) {
        return new Promise((reslove, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("post", url, true);
            xhr.responseType = "arraybuffer"; // 坑点！
            xhr.setRequestHeader("Content-Type", "application/protobuf"); //坑点！
            xhr.onload = (response) => {
                console.log("response", xhr.response);
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let resp = new Uint8Array(xhr.response);
                    reslove(resp)
                } else {
                    reject()
                }
            };
            xhr.send(req);
        })
    }
}