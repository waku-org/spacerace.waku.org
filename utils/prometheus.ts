import axios from "@/node_modules/axios/index";

const promUrl: string = "https://metrics-proxy.infra.status.im";

export default class Prometheus {

    static async getMetric(metric: string) {
        const data = (await axios.get('/' + metric, {baseURL: promUrl})).data
        if (data.status != "success") return NaN
        return data
    }

    static async getAvgPing(): Promise<number> {
        const data = await this.getMetric("avg_ping")
        console.log(data)
        return data.data.result[0].value[1]
    }

    static async getConnectablePeers(): Promise<number> {
        const data = await this.getMetric("connectable_peers")
        console.log(data)
        return data.data.result[0].value[1]
    }
}