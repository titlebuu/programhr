import { ConnectDB } from "../utils/service/connectDB";

export default class Service {
  connectDB: ConnectDB = new ConnectDB();

  public getEmployee = async (date1: any, date2: any) => {
    try {
      const cons: any = await this.connectDB.connections();
      const sql = `select * from EmployeeTable ${date1}`;
      console.log(sql);
      return await cons.query(sql);
    } catch (error) {
      console.log('error ............', error);
      throw error;
    }
  }
}

