/* eslint-disable no-param-reassign */
import urlData from "../config.json";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const { SERVER_URL } = urlData;

const request = {
  StartConnection: async function (runFunction) {
    try {
      const fullUrl = `${SERVER_URL.replace("/api", "")}Synchronize`;
      //   if (token) headers.Authorization = `Bearer ${token}`;
      const connection = new HubConnectionBuilder()
        .withUrl(fullUrl)
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("RecieveReciept", (user, message) => {
        runFunction();
      });
      await connection.start();

      return connection;
    } catch (err) {
      //   return { error: err, data: '', status: err.response?.status };
    }
  },
  UpdateReciept: async function (extConnection, OrderToken) {
    extConnection.invoke("UpdateReceiptByOrdenToken", OrderToken).catch(function (err) {
      return console.error(err.toString());
    });
  },
  UpdateRecieptByTable: async function (extConnection, TableId) {
    extConnection.invoke("UpdateReceiptByTableId", String(TableId)).catch(function (err) {
      return console.error(err.toString());
    });
  },
};

export default request;
