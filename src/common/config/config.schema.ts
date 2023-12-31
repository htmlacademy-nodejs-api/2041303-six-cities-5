import convict from 'convict';
import { ipaddress } from 'convict-format-with-validator';

convict.addFormat(ipaddress);

export type ConfigSchema = {
    PORT: number;
    SALT: string;
    HOST: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_PORT: string;
    DB_NAME: string;
    UPLOAD_DIRECTORY: string;
    JWT_SECRET: string;
    STATIC_DIRECTORY_PATH: string;
};

export const ConfigSchemaEnv = convict({
    PORT: {
        doc: 'port to bind',
        env: 'PORT',
        format: 'port',
        default: 3232,
    },
    SALT: {
        doc: 'Salt for password hash',
        format: String,
        env: 'SALT',
        default: 'secret',
    },
    HOST: {
        doc: 'Host where started service',
        format: String,
        env: 'HOST',
        default: 'localhost',
    },
    DB_HOST: {
        doc: 'IP address of the database server (MongoDB)',
        format: 'ipaddress',
        env: 'DB_HOST',
        default: '127.0.0.1',
    },
    DB_USER: {
        doc: 'Name user for DB',
        format: String,
        env: 'DB_USER',
        default: 'null',
    },
    DB_PASSWORD: {
        doc: 'Password for userDB',
        format: String,
        env: 'DB_PASSWORD',
        default: 'null',
    },
    DB_PORT: {
        doc: 'Port to connect DB',
        format: 'port',
        env: 'DB_PORT',
        default: '27017',
    },
    DB_NAME: {
        doc: 'Name DB',
        format: String,
        env: 'DB_NAME',
        default: 'six-sity-mongodb',
    },
    UPLOAD_DIRECTORY: {
        doc: 'Directory for upload files',
        format: String,
        env: 'UPLOAD_DIRECTORY',
        default: '',
    },
    JWT_SECRET: {
        doc: 'Secret for sign JWT',
        format: String,
        env: 'JWT_SECRET',
        default: '',
    },
    STATIC_DIRECTORY_PATH: {
        doc: 'Path to directory with static resources',
        format: String,
        env: 'STATIC_DIRECTORY_PATH',
        default: 'static',
    },
});
