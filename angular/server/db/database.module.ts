import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import { ConfigModule } from '@nestjs/config';
import {DatabaseConnectionParams} from "./models/DatabaseConnectionParams";

function getDatabaseConnectionParams(): DatabaseConnectionParams {
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
}

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: getDatabaseConnectionParams().host,
            port: getDatabaseConnectionParams().port,
            username: getDatabaseConnectionParams().username,
            password: getDatabaseConnectionParams().password,
            database: getDatabaseConnectionParams().database,
            autoLoadEntities: true,
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule {
    configure(consumer: MiddlewareConsumer) {
        const PgSessionStore = connectPgSimple(session);

        consumer.apply(
            session({
                store: new PgSessionStore({
                    conString: process.env.DATABASE_URL,
                }),
                secret: process.env.SESSION_SECRET || 'supersecret',
                resave: false,
                saveUninitialized: false,
                cookie: {
                    maxAge: 1000 * 60 * 60 * 24,
                    secure: process.env.NODE_ENV === 'production',
                },
            }),
        ).forRoutes('*');
    }
}