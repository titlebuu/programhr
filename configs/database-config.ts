export interface DatabaseConfig {
  user: string;
  password: string;
  database: string;
  server: string;
  options: option
}

interface option {
  encrypt: boolean,
  enableArithAbort: boolean
}

export const databaseConfig: DatabaseConfig = {
  user: 'trel_web',
  password: 'password@1',
  server: '10.14.0.105',
  database: 'HR_Time_Access',
  options: {
    encrypt: false,
    enableArithAbort: false 
  }
};