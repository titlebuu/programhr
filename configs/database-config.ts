export interface DatabaseConfig {
  user: string;
  password: string;
  database: string;
  server: string;
  options: option
}

interface option {
  encrypt: boolean
}

export const databaseConfig: DatabaseConfig = {
  user: 'sa1',
  password: 'password@2',
  server: '10.14.2.208',
  database: 'HR_Time_Access',
  options: {
    encrypt: false
  }
};