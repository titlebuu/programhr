export interface DatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    encrypt: boolean
  }
  
  export const databaseConfig: DatabaseConfig = {
    username: "sa1",
    password: "password@2",
    database: "HR_Time_Access",
    host: "PTF-SIRANEE",
    encrypt: false
  };